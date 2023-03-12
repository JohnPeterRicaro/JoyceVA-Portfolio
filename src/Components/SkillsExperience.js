import CustomerService from "./Assets/Icons/Customer Service ICON.svg";
import OrgIcon from "./Assets/Icons/Organisation ICON.svg";
import AnaIcon from "./Assets/Icons/Analytical Skills ICON.svg";
import ProbIcon from "./Assets/Icons/Problem Solving ICON.svg";
import AttnIcon from "./Assets/Icons/Attention To Detail ICON.svg";
import CommIcon from "./Assets/Icons/Communication ICON.svg";
import Blink from "./Assets/Blinks/BLINK-GIF.gif";
import JoycePic2 from "./Assets/Hero/Joyce Picture 2.svg"

const SkillsExperience = () => {
  return (
    <section className="w-[350px] md:w-[80%] mx-auto mt-[160px] flex justify-center items-center flex-col md:flex-row md:justify-center md:items-start">
      <div className="w-full h-auto md:w-1/2 md:h-full">
        <div className="relative flex md:justify-start md:items-center mb-[40px]">
          <div className="absolute">
            <img className="hidden md:block w-[42px] -translate-x-[60px] -translate-y-[45px]" src={Blink} alt="" />
          </div>
          <h1 id="__SkillsAndExp" className="text-[32px] md:text-[70.3px] font-bold text-[#046A9B] w-full md:w-[372px] dropShadow">Skills & Experience</h1>
        </div>
        <div className=" flex justify-center items-start flex-col">
          <div className="mb-[40px]">
            <h2 className="text-[32px] font-bold text-[#046A9B]">Skills</h2>
          </div>
          {/**1st row */}
          <div className="mb-[40px] flex justify-center items-start space-x-4 md:justify-start md:items-center md:space-x-20">
            <div className="flex justify-center items-center flex-col space-y-2">
              <div className="flex justify-center items-center w-[60px] h-[60px] md:w-[121px] md:h-[121px] bg-[#E8EBF3] rounded-full">
                <img className="w-[32px] md:w-[65px]" src={CustomerService} alt="" />
              </div>
              <h3 className=" font-thin text-[#71b5cd]">Customer Service</h3>
            </div>
            <div className="flex justify-center items-center flex-col space-y-2">
              <div className="flex justify-center items-center w-[60px] h-[60px] md:w-[121px] md:h-[121px] bg-[#E8EBF3] rounded-full">
                <img className="w-[32px] md:w-[65px]" src={OrgIcon} alt="" />
              </div>
              <h3 className="font-thin text-[#71b5cd]">Organisation</h3>
            </div>
            <div className="flex justify-center items-center flex-col space-y-2">
              <div className="flex justify-center items-center w-[60px] h-[60px] md:w-[121px] md:h-[121px] bg-[#E8EBF3] rounded-full">
                <img className="w-[32px] md:w-[65px]" src={AnaIcon} alt="" />
              </div>
              <h3 className="font-thin text-[#71b5cd]">Analytical skills</h3>
            </div>
          </div>
          {/**2nd row */}
          <div className="mb-[40px] flex justify-center items-start space-x-4 md:justify-start md:items-center md:space-x-20">
            <div className="flex justify-center items-center flex-col space-y-2">
              <div className="flex justify-center items-center w-[60px] h-[60px] md:w-[121px] md:h-[121px] bg-[#E8EBF3] rounded-full">
                <img className="w-[32px] md:w-[65px]" src={ProbIcon} alt="" />
              </div>
              <h3 className="font-thin text-[#71b5cd]">Problem-solving</h3>
            </div>
            <div className="flex justify-center items-center flex-col space-y-2">
              <div className="flex justify-center items-center w-[60px] h-[60px] md:w-[121px] md:h-[121px] bg-[#E8EBF3] rounded-full">
                <img className="w-[32px] md:w-[65px]" src={AttnIcon} alt="" />
              </div>
              <h3 className="font-thin text-[#71b5cd]">Attention to detail</h3>
            </div>
            <div className="flex justify-center items-center flex-col space-y-2">
              <div className="flex justify-center items-center w-[60px] h-[60px] md:w-[121px] md:h-[121px] bg-[#E8EBF3] rounded-full">
                <img className="w-[32px] md:w-[65px]" src={CommIcon} alt="" />
              </div>
              <h3 className="font-thin text-[#71b5cd]">Communication</h3>
            </div>
          </div>
        </div>
      </div>
      {/**Other Half */}
      <div className="w-1/2 flex justify-center items-center flex-col space-y-20">
        <div className="flex w-[350px] justify-center items-center md:w-[425.2px] md:justify-start md:items-center md:flex-col">
          <div className="w-[350px] md:w-[425.2px]">
            <h1 className=" text-[37px] text-[#046a9b] font-bold pb-[20px] mb-[20px] border-b-[#046a9b] border-b-[4px]">Experience</h1>
          {/**Tabs */}
            <div className="flex justify-start items-start text-[16px] text-[#046A9B] pb-[20px] mb-[20px] border-b-[#046a9b] border-b-[4px]">
              <h3>2021 - 2023</h3>
              <div className="ml-[20px] flex justify-center items-start flex-col">
                <p className="font-bold">Commercial Lines</p>
                <p className="font-bold">Customer Service & Producer Assistant</p>
                <p className="text-[#71B5CD] text-[12px]">Unleash Your Team - Volaris Insurance Group</p>
              </div>
            </div>
          {/**Tabs */}
            <div className="flex justify-start items-start text-[16px] text-[#046A9B] pb-[20px] mb-[20px] border-b-[#046a9b] border-b-[4px]">
              <h3>2019 - 2021</h3>
              <div className="ml-[20px] flex justify-center items-start flex-col">
                <p className="font-bold">Personal Lines</p>
                <p className="font-bold">Customer Service Admin Assistant</p>
                <p className="text-[#71B5CD] text-[12px]">Coverdesk PH - Swell Insurance Solutions</p>
              </div>
            </div>
          {/**Tabs */}
            <div className="flex justify-start items-start text-[16px] text-[#046A9B] mb-[40px]">
              <h3>2017 - 2018</h3>
              <div className="ml-[20px] flex justify-center items-start flex-col">
                <p className="font-bold">Travel Consultant / CSR</p>
                <p className="text-[#71B5CD] text-[12px]">Sykes Asia - Hotels.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-end items-center">
          <img className="w-[350px]" src={JoycePic2} alt=""/>
        </div>
      </div>
    </section>
  );
};
export default SkillsExperience;
