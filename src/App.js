import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero"
import ForYou from "./Components/ForYou";
import Services from "./Components/Services";
import SkillsExperience from "./Components/SkillsExperience";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import BurgerMenu from "./Components/BurgerMenu";
import MobileMenu from "./Components/MobileMenu";

function App() {
  return (
    <div>
      <div className="w-[375px] mx-auto md:w-[1440px] md:mx-auto">
        <BurgerMenu />
        <MobileMenu/>
        <NavBar/>
        <Hero/>
        <ForYou/>
        <Services/>
        <SkillsExperience />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
