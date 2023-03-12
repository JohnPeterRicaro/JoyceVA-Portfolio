import PhoneIcon from "./Assets/Icons-White/White.svg";
import EmailIcon from "./Assets/Icons-White/Email White.svg";
import LinkedInIcon from "./Assets/Icons-White/Linkedin White.svg";
import UpworkIcon from "./Assets/Icons-White/Upwork White.svg";
import CalendlyIcon from "./Assets/Icons-White/Calendar WHITE.svg";
import SkypeIcon from "./Assets/Icons-White/Skype WHITE.svg";
import ResumeIcon from "./Assets/Icons-White/Resume WHITE.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className=" mt-[120px] h-full md:w-full md:h-[300px] bg-[#296F8D] flex justify-center items-center">
      <div className="w-[80%] h-full flex flex-col md:flex-row md:justify-between md:items-center text-white text-[20px]">
        <div className="mt-[40px] md:mt-0 w-full flex flex-col justify-center items-start gap-5 md:flex-row md:gap-0 md:w-1/2 md:justify-start md:items-start md:space-x-[40px]">
          <div className="flex justify-start items-start flex-col">
            <div className="flex justify-start items-center space-x-0 md:space-x-3">
              <div>
                <img src={PhoneIcon} className="w-[16px]" alt="" />
              </div>
              <div>
                <a href="tel:+639288503481">+63 928 850 3481</a>
              </div>
            </div>
            <div className="flex justify-start items-center space-x-3">
              <div>
                <img src={EmailIcon} className="w-[20px]" alt="" />
              </div>
              <div>
                <a href="mailto:villamorjoyceann@gmail.com?Subject=Can%20we%20talk%3F">
                  villamorjoyceann@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <Link className=" underline" to="__ForYou" spy={true} smooth={true} offset={10} duration={500}>
              For You
            </Link>
            <Link className=" underline" to="__Services" spy={true} smooth={true} offset={8} duration={500}>
              Services
            </Link>
            <Link className=" underline" to="__SkillsAndExp" spy={true} smooth={true} offset={10} duration={500}>
              Skills & Experience
            </Link>
            <Link className=" underline" to="__Portfolio" spy={true} smooth={true} offset={10} duration={500}>
              Portfolio
            </Link>
          </div>
        </div>
        {/** BreakPoint */}
        <div className="mt-[40px] md:w-1/2 md:mt-0 h-full flex justify-center items-center md:justify-end md:items-end">
          <div className=" h-[80%] w-full flex justify-start items-center gap-5 mb-[20px] md:flex-row md:mb-0 md:justify-end md:items-start md:gap-2">
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#71B5CD]">
              <a href="https://www.linkedin.com/in/joyceaev/" target="_blank">
                <img src={LinkedInIcon} className="w-[20px]" alt="" />
              </a>
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#71B5CD]">
              <a href="https://www.upwork.com/freelancers/~0189e227b10ee1aeac" target="_blank">
                <img src={UpworkIcon} className="w-[20px]" alt="" />
              </a>
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#71B5CD]">
              <a href="https://calendly.com/jvillamorva" target="_blank">
                <img src={CalendlyIcon} className="w-[20px]" alt="" />
              </a>
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#71B5CD]">
              <a href="https://join.skype.com/invite/gUjvlMUeGWmQ" target="_blank">
                <img src={SkypeIcon} className="w-[20px]" alt="" />
              </a>
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#71B5CD]">
              <a href="https://drive.google.com/file/d/1QVfvX3yilIVugAfG0sVIUhsrxhTRaScb/view" target="_blank">
                <img src={ResumeIcon} className="w-[20px]" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
