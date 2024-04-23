'use client'
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavigationMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      {open ? (
        <IoClose className='text-black z-20 m-2 text-3xl text-red-600' onClick={handleOpen} />
      ) : (
        <GiHamburgerMenu className='text-white z-20 m-2 text-3xl' onClick={handleOpen} />
      )}
     
        <div className={`fixed ${ !open ? '-top-full' : 'top-0' } ease-out duration-700 w-full h-1/2 bg-black`}>
          <ul className="flex h-full flex-col space-x-2 justify-around items-center text-green">
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <Link href="calculator">Calculator</Link>
            </li>
            <li>
              <Link href="assistent">Panda assistent</Link>
            </li>
          </ul>
        </div>
    </>
  );
};

export default NavigationMobile;
