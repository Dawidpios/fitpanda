import Link from "next/link";
import Avatar from "../../Avatar/Avatar";
import { useSession } from "next-auth/react";
import { RiCloseFill } from "react-icons/ri";
import { Dispatch, SetStateAction } from "react";

const UserPanel = ({
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
    const { email, name, id } = data?.user;

    return (
      <section
        className={`${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-white transition-opacity duration-700 ease-in-out absolute top-0 right-0 border-b-4 border-l-4 border-violet rounded-bl-lg`}
      >
        <RiCloseFill
          onClick={closeHandler}
          className=" text-3xl absolute right-0 m-3 hover:cursor-pointer text-violet"
        />
        <div className=" w-60 sm:max-w-[620px]">
          <div className="bg-gray-950 p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12"></Avatar>
              <div className="text-white">
                <div className="font-medium text-violet">{name}</div>
                <div className="text-sm text-gray-400 text-violet">{email}</div>
              </div>
            </div>
            <div className="m-2 flex flex-col justify-start">
              <Link className="mt-2 text-xl text-violet" href="/user/panel">
                User panel
              </Link>
              <Link
                className="mt-2 text-xl text-violet"
                href={`/user/profile/${id}`}
              >
                My profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default UserPanel;
