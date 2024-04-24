'use client'
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Login from "../Login/Login";

const NavigationMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      {open ? (
        <IoClose className='text-white z-20 m-2 text-5xl' onClick={handleOpen} />
      ) : (
        <GiHamburgerMenu className='text-white z-20 m-2 text-5xl' onClick={handleOpen} />
      )}
        <div className={`fixed ${ !open ? '-top-full' : 'top-0' } ease-out duration-700 w-full h-1/2 bg-black border-b-8 rounded-b-3xl border-white`}>
          <ul className="flex h-full flex-col space-x-2 justify-around items-center text-green uppercase text-3xl">
            <li>
              <Link onClick={handleOpen} href="/">Home Page</Link>
            </li>
            <li>
              <Link onClick={handleOpen} href="calculator">Calculator</Link>
            </li>
            <li>
              <Link onClick={handleOpen} href="assistent">Panda assistent</Link>
            </li>
            <Login></Login>
          </ul>
        </div>
    </>
  );
};

export default NavigationMobile;
