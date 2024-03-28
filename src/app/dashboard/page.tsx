import Image from "next/image";
import Logo from "@/assets/logo.png";

import "./dashboard.css";
import { navLinksAuthorised } from "@/mocks/navlinks";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen">
      {/* Sidebar */}
      <div className="grid items-start bg-main-blue content-start">
        <div className="flex items-center justify-self-center px-[24px] pt-[8px]">
          <Image
            alt=""
            src={Logo}
            className="w-[36px] h-[36px] rounded-[50%] mr-[8px]"
          />
          <h3 className="text-pink-cloud text-[24px] mr-[30px]">Planner app</h3>
        </div>
        <nav className="grid gap-x-[30px] list-none m-0 p-0 mt-[40px]">
          {navLinksAuthorised.map((link) => (
            <li
              key={link.href}
              className={`px-[36px] py-[16px] rounded-l-[50px] rounder-r-[50px] z-[2] relative ${
                link.href === "/goals" &&
                "text-main-blue inverted-border-radius bg-white text-[#FFf]"
              } `}
            >
              <Link href={link.href} className="text-galada">
                {link.label}
              </Link>
            </li>
          ))}
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
