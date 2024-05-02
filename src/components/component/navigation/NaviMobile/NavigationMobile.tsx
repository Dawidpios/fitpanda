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
        <div className={`fixed ${ !open ? '-right-full' : 'right-0' }  ease-out duration-700 w-3/4 h-full bg-black border-l-2 border-white rounded-l-lg`}>
          <ul className="flex h-full flex-col space-x-2 justify-center items-center text-white uppercase text-2xl mt-7 gap-4 text-center font-bold">
            <li className="p-2 rounded-xl hover:text-white">
              <Link onClick={handleOpen} href="/">Home Page</Link>
            </li>
            <li className="p-2 rounded-xl hover:text-white">
              <Link onClick={handleOpen} href="calculator">Calculator</Link>
            </li>
            <li className="p-2 rounded-xl hover:text-white">
              <Link onClick={handleOpen} href="assistent">Panda assistent</Link>
            </li>
            <Login></Login>
          </ul>
        </div>
    </>
  );
};

export default NavigationMobile;
