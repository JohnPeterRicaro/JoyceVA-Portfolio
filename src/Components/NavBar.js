import {Link, link} from "react-scroll"

const NavBar = () => {
  return (
    <nav className=" hidden md:mx-auto md:flex md:justify-center md:items-center">
      <ul className=" w-full h-10 px-[40px] py-[40px] flex justify-end items-center gap-5 font-OpenSans">
        <li className=" text-[#046a9b] underline">
          <Link to="__ForYou" spy={true} smooth={true} offset={10} duration={500}>For you</Link>
        </li>
        <li className=" text-[#046a9b] underline">
          <Link to="__Services" spy={true} smooth={true} offset={8} duration={500}>Services</Link>
        </li>
        <li className=" text-[#046a9b] underline">
          <Link to="__SkillsAndExp" spy={true} smooth={true} offset={10} duration={500}>Skills & Exp</Link>
        </li>
        <li className=" text-[#046a9b] underline">
          <Link to="__Portfolio" spy={true} smooth={true} offset={10} duration={500}>Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
