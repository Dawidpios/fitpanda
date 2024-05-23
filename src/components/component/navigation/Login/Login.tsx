"use client";
import { useState } from 'react'
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Avatar from "../../Avatar/Avatar";
import UserPanel from '../../user/panel/UserPanel';

const Login = () => {
  const [open, setOpen] = useState(false)
  const { data, status } = useSession();

  const logOut = () => {
    signOut({
      redirect: true,
      callbackUrl: "/"
    })
  }

  const userPanelHandler = () => {
    setOpen(prevState => !prevState)
  }

  if (status === "authenticated") {
    const { image } = data.user;
    return (
      <>
        <button onClick={logOut} className="p-2 rounded-xl hover:text-white">
          Log out
        </button>
        <button onClick={userPanelHandler}>
          <Avatar src={image}></Avatar>
        </button>
        <UserPanel open={open} close={setOpen}/>
      </>
    );
  }
  return (
    <>
      {status === "unauthenticated" && (
        <>
          <li className="p-2 rounded-xl hover:text-white">
            <Link href="/register">Sign up</Link>
          </li>
          <li className="p-2 rounded-x hover:text-white">
            <Link href="/login">Sign in</Link>
          </li>{" "}
        </>
      )}
    </>
  );
};

export default Login;
