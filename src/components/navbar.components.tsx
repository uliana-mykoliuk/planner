import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/logo.png";
import { navLinks } from "@/mocks/navlinks";

export interface NavLink {
  href: string;
  label: string;
}

const Header: React.FC = () => {
  return (
    <header className="grid grid-cols-3 fixed top-0 z-[5] justify-start items-center py-[8px] px-[50px] bg-gradient-to-r from-transparent to-main-blue w-full">
      <div className="flex items-center">
        <Image
          alt=""
          src={Logo}
          className="w-[36px] h-[36px] rounded-[50%] mr-[8px]"
        />
        <h3 className="text-main-purple text-[24px] mr-[30px]">Planner app</h3>
      </div>
      <nav className="flex gap-x-[30px] list-none m-0 p-0 justify-self-center">
        {navLinks.map((link) => (
          <li key={link.href} className="">
            <Link href={link.href} className="text-[#FFf]">
              {link.label}
            </Link>
          </li>
        ))}
      </nav>

      <Link
        href="/sign-in"
        className="justify-self-end text-[#fff] bg-main-purple px-[16px] py-[8px] rounded-[5px]"
      >
        Sign In / Sign Up
      </Link>
    </header>
  );
};

export default Header;
