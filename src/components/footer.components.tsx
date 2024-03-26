import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/mocks/navlinks";

import Logo from "../assets/logo.png";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="card h-full w-full px-[50px] pt-[50px] pb-[20px]">
        <div className="grid grid-cols-3 items-start">
          <div className="flex items-center">
            <Image
              alt=""
              src={Logo}
              className="w-[36px] h-[36px] rounded-[50%] mr-[8px]"
            />
            <h3 className="text-white text-[24px] leading-[36px]">
              Planner app
            </h3>
          </div>
          <nav className="flex gap-x-[30px] list-none m-0 p-0 justify-self-center ">
            {navLinks.map((link) => (
              <li key={link.href} className="">
                <Link href={link.href} className="text-[#FFf] leading-[36px]">
                  {link.label}
                </Link>
              </li>
            ))}
          </nav>
          <div className="grid justify-items-end justify-self-end">
            <div className="flex gap-x-[15px]">
              <Link href="https://www.linkedin.com/in/ulyalana124">
                <Image alt="" src={Linkedin} />
              </Link>
              <Link href="https://github.com/uliana-mykoliuk">
                <Image alt="" src={Github} />
              </Link>
            </div>
            <p className="text-right text-white opacity-[70%] mt-[15px]">
              Website created by Uliana Mykoliuk in 2024.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
