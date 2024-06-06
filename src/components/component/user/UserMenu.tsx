import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import { useSession } from "next-auth/react";
import { RiCloseFill } from "react-icons/ri";
import { FaCog } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";

const UserMenu = ({
  open,
  close,
}: {
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, status } = useSession();

  const closeHandler = () => {
    close(false);
  };
  if (status === "authenticated") {
    const { email, name, id, image } = data?.user;

    return (
      <section
        className={`${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-black transition-opacity duration-700 ease-in-out absolute top-0 right-0 border-b-4 border-l-4 border-violet rounded-bl-lg`}
      >
        <RiCloseFill
          onClick={closeHandler}
          className=" text-3xl absolute right-0 m-3 hover:cursor-pointer text-white hover:text-red-600"
        />
        <div className=" w-60 sm:max-w-[620px]">
          <div className="bg-gray-950">
            <div className="flex items-center gap-4 p-2 mt-4">
              <Avatar className="h-12 w-12" src={image}></Avatar>
              <div className="text-white">
                <div className="font-medium">{name}</div>
                <div className="text-sm text-gray-400">{email}</div>
              </div>
            </div>
            <div className="m-2 flex flex-col justify-start">
              <Link onClick={closeHandler} className="mt-2 text-xl text-white hover:text-green" href={`/user/${id}/panel`}>
                User panel <FaCog className="inline" />
              </Link>
              <Link
                onClick={closeHandler}
                className="mt-2 text-xl text-white hover:text-green"
                href={`/user/${id}/account`}
              >
                My profile <FaUserTag className="inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default UserMenu;
