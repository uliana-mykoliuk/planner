import "./hero.css";

const HeroSection: React.FC = () => {

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full">
        <div className="h-full w-full absolute">
          <div className="h-[100vh] w-full relative overflow-hidden">
            <div className="sky w-[300vw] h-[300vw] absolute rounded-[200%] -top-[125vw] -right-[125vw]"></div>
            <div className="w-[100%] h-[100%] absolute top-0 left-0 card"></div>
          </div>
        </div>
        <div className="relative w-[50%] h-screen ml-auto flex items-center justify-end mr-[20px]">
          <div className="h-[90%] w-auto planet absolute inset z-2 flex flex-col items-center justify-center p-[50px]">
            <div>
              <h1 className="text-right text-[72px]">
                Get Organized with <br />
                Our Planner
              </h1>
              <p className="text-right text-[24px] text-[#191970]">
                Effortless Planning for Every Day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
