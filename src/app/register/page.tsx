'use client'

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import toast, {Toaster} from 'react-hot-toast'


const schema = z.object({
  name: z.string().trim().min(5, {message: 'User name must be 5 or more characters long'}).max(10, {message: 'Must be 10 or less characters long'}),
  password: z.string().trim().min(8, {message: 'Password must be 8 or more characters long'}),
  email: z.string().email()
})

type typeRegisterSchema = z.infer<typeof schema>;


const Register = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<typeRegisterSchema>({
    resolver: zodResolver(schema)
  })

  const submitHandler: SubmitHandler<typeRegisterSchema> = async (formData) => {
    try {
      const { success } = schema.safeParse(formData)
      if(success) {
        const res = await fetch('https://fitpandabackend.vercel.app/register', {
          method: 'POST',
          body: JSON.stringify(formData)
        })
        const {success} = await res.json();
        if(success) {
          toast.success('Sign up success!');
        }
      }
    } catch {
      toast.error('Sign up failed!')
    }
  }
  return ( 
    <>
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            Already have an account? <b/>
            <Link
              className="font-medium text-green hover:text-indigo-500  dark:hover:text-violet"
              href="/login"
            >
              Sign in
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className="mt-8 space-y-6">
          <input defaultValue="true" name="remember" type="hidden" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                {...register('name')}
                autoComplete="name"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-2 focus:z-10 focus:border-green focus:outline-none focus:ring-green mt-2"
                id="name"
                name="name"
                placeholder="Name"
                required
                type="text"
              />
              {errors.name && <p className='text-red-500 font-bold'>{errors.name.message}</p>}
            </div>
            <div>
              <label className="sr-only" htmlFor="email-address">
                Email address
              </label>
              <input
                {...register('email')}
                autoComplete="email"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-2 focus:z-10 focus:border-green focus:outline-none focus:ring-green mt-2"
                id="email-address"
                name="email"
                placeholder="Email address"
                required
                type="email"
              />
              {errors.email && <p className='text-red-500 font-bold'>{errors.email.message}</p>}
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                {...register('password')}
                autoComplete="new-password"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-2 focus:z-10 focus:border-green focus:outline-none focus:ring-green mt-2"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
              {errors.password && <p className='text-red-500 font-bold'>{errors.password.message}</p>}
            </div>
          </div>
          <div>
            <button
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green py-2 px-4 text-sm text-white text-bold font-b"
              type="submit"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </section>
    <Toaster/>
    </>
   );
}
 
export default Register;