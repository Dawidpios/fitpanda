import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import { GithubProfile } from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options : NextAuthOptions = {
  secret: process.env.AUTH_SECRET as string,
  providers: [
    GitHubProvider({
      profile(profile: GithubProfile) {
        return {
          ...profile,
          id: profile.id.toString(),
          image: profile.avatar_url
        }
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      // @ts-ignore
      async authorize(credentials, req) {
        if (!credentials) return null;
        // @ts-ignore
        const {email, password} = credentials
        const userAuth = await fetch('https://fitp-be.vercel.app/authUser', {
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
        })
        const user = await userAuth.json()
        if(userAuth.status === 200 && user) {
          return user
        }
        throw new Error("Login failed")
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user}
    },
    async session({session, token, trigger}) {
      session.user.id = token.sub
      return session 
    }
  }
}