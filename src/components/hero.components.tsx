import Image from "next/image";
import "./hero.css";

import HeroImg from "@/assets/hero-img.png";

const HeroSection: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden bg-main-pink ">
      <div className="grid grid-cols-2 gap-x-[50px] h-[100%] items-center p-[50px] w-full max-w-[1280px] mx-auto">
        <Image src={HeroImg} alt="" className="h-90% w-auto justify-self-end" />
        <div className="">
          <h1 className="text-[72px] text-night-sky">
            Get Organized with <br />
            Our Planner
          </h1>
          <p className="text-[24px] text-main-blue">
            Effortless Planning for Every Day
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
