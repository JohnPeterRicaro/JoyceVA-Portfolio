import Arrow from "./Assets/Hero/Arrow.svg";
import Breeze0 from "./Assets/Breeze/Breeze 0.svg";
import LinkedIn from "./Assets/Hero/Linkedin.svg";
import Skype from "./Assets/Hero/Skype.svg";
import UpWork from "./Assets/Hero/Upwork.svg";
import calendly from "./Assets/Hero/Calendly.svg";
import Resume from "./Assets/Hero/Resume.svg";
import Button from "./Assets/Hero/Button.gif";
import JoycePic from "./Assets/Hero/Joyce Picture.svg";
import JoycePic2 from "./Assets/Hero/Joyce Picture 2.svg"
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="__Hero" className="mx-auto mt-[80px] w-[full] flex flex-col-reverse md:flex-row">
      <div className="w-1/2 h-auto flex flex-col justify-center item-center md:flex-row">
        <div className="mx-auto flex justify-start items-center flex-col">
          <div className="relative flex justify-start items-center flex-col">
            <div className="absolute">
              <p className="hidden md:block translate-x-[-190px] rotate-[-25deg] font-semibold text-[12px] text-[#ada2ff]">
                Hello!
              </p>
            </div>
            <h1 className="w-[350px] md:w-[375px] font-bold text-[32px] md:text-[34px] text-[#296f8d]">
              It's my mission to make insurance agency owner's lives a breeze.
            </h1>
            <div className="absolute translate-x-[160px] translate-y-[100px]  md:translate-x-[158px] md:translate-y-[60px]">
              <img className="w-[75px] md:w-[152px]" src={Breeze0} alt="" />
            </div>
          </div>
          <div className="w-full my-8 gap-2 flex justify-center items-start">
            <p className="mt-[-7px]">—</p>
            <span className="w-[350px] md:w-[375px] text-[#046a9b] italic font-bold text-[11px] leading-[1.4em] tracking-normal">
              Greetings. I’m Joyce, and I’m a virtual assistant helping
              insurance agencies save time and money by offering a variety of
              data entry, customer service and admin tasks to make sure they’re
              as efficient as they could be!
            </span>
          </div>
          <div className="w-[375px] flex justify-start items-center">
            <a href="mailto:villamorjoyceann@gmail.com?Subject=Can%20we%20talk%3F">
              <button className=" w-[130px] h-[37px] mr-5 text-white flex justify-center items-center gap-[10px] bg-[#ada2ff] rounded-[24px]">
                <p>Let's talk</p>
                <img className=" w-[23px] h-[19px]" src={Button} alt="" />
              </button>
            </a>
            <div className=" flex justify-start items-center">
              <Link
                className=" underline text-[#046a9b] text-[12px] font-bold flex justify-start items-center"
                to="__Portfolio" spy={true} smooth={true} offset={10} duration={500}
              >
                Portfolio
                <img className="h-[23px] w-[24px]" src={Arrow} alt="" />
              </Link>
            </div>
          </div>
          <div className="w-[375px] mt-[30px] md:mt-40 flex justify-start items-center gap-[20px]">
            <h2 className=" font-OpenSans text-[#04c1da] text-[12px]">
              Check Out My
            </h2>
            <div className="flex justify-center items-center gap-[14px]">
              <div className="w-[40px] h-[40px] rounded-full bg-gray-200 flex justify-center items-center">
                <a href="https://www.linkedin.com/in/joyceaev/" target="_blank">
                  <img className=" h-[24px] w-[24px]" src={LinkedIn} alt="" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-200 flex justify-center items-center">
                <a href="https://www.upwork.com/freelancers/~0189e227b10ee1aeac" target="_blank">
                  <img className=" h-[24px] w-[24px]" src={UpWork} alt="" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-200 flex justify-center items-center">
                <a href="https://calendly.com/jvillamorva" target="_blank">
                  <img className=" h-[24px] w-[24px]" src={calendly} alt="" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-200 flex justify-center items-center">
                <a href="https://join.skype.com/invite/gUjvlMUeGWmQ" target="_blank">
                  <img className=" h-[24px] w-[24px]" src={Skype} alt="" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-200 flex justify-center items-center">
                <a href="https://drive.google.com/file/d/1QVfvX3yilIVugAfG0sVIUhsrxhTRaScb/view" target="_blank">
                  <img className=" h-[24px] w-[24px]" src={Resume} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:w-1/2 flex justify-center items-start">
        <p className="absolute w-[280px] font-bold translate-y-[-50px] md:translate-y-0 md:translate-x-[100px] text-[#296F8D]">
          "I am someone who can do the tasks that you don't do... or shouldn't
          do."
        </p>
        <div className="hidden md:block md:absolute md:translate-x-[-170px] md:translate-y-[-180px] md:-z-10">
            <img src={JoycePic} alt=""/>
        </div>
        <div className="flex justify-end items-center md:hidden">
          <img className="w-[350px]" src={JoycePic2} alt=""/>
        </div>
      </div>
    </section>
  );
};
export default Hero;
