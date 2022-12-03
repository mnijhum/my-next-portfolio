import About from "../components/About";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MetaTag from "../components/MetaTag";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import { design } from "../constants/design";

const Home = () => {
  return (
    <div>
      <MetaTag />
      <div
        className={`${design.flexCenter} ${design.paddingX} w-full navbar shadow-md`}
      >
        <div className={`${design.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${design.flexCenter}`}>
        <div className={`${design.boxWidth}`}>
          <Main />
        </div>
      </div>
      <div className={`${design.paddingX} ${design.flexCenter}`}>
        <div className={`${design.boxWidth}`}>
          <About />
          <Timeline />
          <Skills />
          <Testimonials />
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
