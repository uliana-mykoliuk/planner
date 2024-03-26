import Image from "next/image";
import "./hero.css";

import HeroImg from "@/assets/hero-img.png";

const HeroSection: React.FC = () => {
  return (
    <div className="h-custom-hero overflow-hidden mt-[56px] relative">
      <div className="h-full w-full absolute">
        <div className="h-[100vh] w-full relative overflow-hidden">
          <div className="sky w-[300vw] h-[300vw] absolute rounded-[200%] -top-[125vw] -right-[125vw]"></div>
          <div className="w-[100%] h-[100%] absolute top-0 left-0 card"></div>
        </div>
      </div>
      <div className="absolute grid grid-cols-2 h-full items-center p-[50px] w-full max-w-[1280px] top-[50%] right-[50%] -translate-y-[50%] translate-x-[50%]">
        <div className="-mt-[40px]">
          <h1 className="text-[72px]">
            Get Organized with <br />
            Our Planner
          </h1>
          <p className="text-[24px] text-white">
            Effortless Planning for Every Day
          </p>
        </div>
        <Image src={HeroImg} alt="" className="justify-self-end -mt-[40px]" />
      </div>
    </div>
  );
};

export default HeroSection;
