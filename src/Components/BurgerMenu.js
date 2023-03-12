import { useState } from "react";
import { Link } from "react-scroll";

const BurgerMenu = (props) => {
  const [isMenu, setIsMenu] = useState(false);

  const clickHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <section>
      <section className="w-[357px] flex justify-end items-center h-20 md:hidden">
        <button
          onClick={clickHandler}
          id="menu-btn"
          className={
            isMenu
              ? "z-30 block md:hidden focus:outline-none hamburger open"
              : "z-30 block md:hidden focus:outline-none hamburger"
          }
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </section>
      <div
        id="menu"
        className={isMenu ? "fixed inset-0 z-20 bg-[#296f8d] flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue md:hidden" : "hidden"}
      >
        <div className="w-full py-3 text-center focus:cursor-pointer">
          <Link
            to="__ForYou"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            For you
          </Link>
        </div>
        <div className="w-full py-3 text-center focus:cursor-pointer">
          <Link
            to="__Services"
            spy={true}
            smooth={true}
            offset={8}
            duration={500}
          >
            Services
          </Link>
        </div>
        <div className="w-full py-3 text-center focus:cursor-pointer">
          <Link
            to="__SkillsAndExp"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Skills & Exp
          </Link>
        </div>
        <div className="w-full py-3 text-center focus:cursor-pointer">
          <Link
            to="__Portfolio"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};
export default BurgerMenu;
