import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/logo.png";
import { navLinks } from "@/mocks/navlinks";

export interface NavLink {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  return (
    <nav className="grid grid-cols-3 fixed top-0 z-[5] justify-start items-center py-[8px] px-[50px] bg-header w-full">
      <div className="flex items-center">
        <Image
          alt=""
          src={Logo}
          className="w-[36px] h-[36px] rounded-[50%] mr-[8px]"
        />
        <h3 className="text-white text-[24px] mr-[30px]">Planner app</h3>
      </div>
      <ul className="flex gap-x-[30px] list-none m-0 p-0 justify-self-center">
        {navLinks.map((link) => (
          <li key={link.href} className="">
            <Link href={link.href} className="text-[#FFf]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
