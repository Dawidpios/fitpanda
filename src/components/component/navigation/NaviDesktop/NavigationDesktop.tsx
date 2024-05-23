import Link from "next/link";
import Login from "../Login/Login";

const NavigationDesktop = () => {
  return (
    <div className="w-full m-2.5">
        <ul className="flex p-2 h-full flex-row space-x-2 justify-around align-around items-center text-green text-xl">
          <li className="p-2 rounded-xl hover:text-white">
            <Link href="/">Home Page</Link>
          </li>
          <li className="p-2 rounded-xl hover:text-white">
            <Link href="calculator">Calculator</Link>
          </li>
          <li className="p-2 rounded-xl hover:text-white">
            <Link href="assistent">Panda assistent</Link>
          </li>
          <Login />
        </ul>
      </div>
  );
};

export default NavigationDesktop;
