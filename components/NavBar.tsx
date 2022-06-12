import { FC } from "react";
import Image from "next/image";

const NavBar: FC = () => {
  return (
    <div className="w-full h-28  px-16 flex justify-between items-center shadow">
      <Image alt="logo" src={"/logo.svg"} width={"69px"} height={"69px"} />
      <nav>
        <ul className="flex justify-center items-center gap-[2.1rem]">
          <li className="hover:text-hover-blue">Home</li>
          <li>Work</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
