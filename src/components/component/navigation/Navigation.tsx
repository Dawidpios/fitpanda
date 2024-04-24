"use client";
import navilogo from "../../../../public/navi/navilogo.png";
import Image from "next/image";
import NavigationMobile from "./NaviMobile/NavigationMobile";
import NavigationDesktop from "./NaviDesktop/NavigationDesktop";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, desktop: 700 };

const Navigation = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");

  return (
    <div className="w-full bg-black fixed z-10 h-14 flex justify-between">
      <div className="m-2 relative w-14 rounded-full h-full">
        <Image alt="image" src={navilogo} fill={true}></Image>
      </div>
      {breakpoint === "mobile" ? (
        <NavigationMobile></NavigationMobile>
      ) : (
        <NavigationDesktop></NavigationDesktop>
      )}
    </div>
  );
};

export default Navigation;
