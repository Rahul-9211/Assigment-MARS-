
import "./App.css";
import About from "./components/About";
import SliderSlick from "./components/SliderSlick";
import Grid from "./components/Grid";
import Contact from "./components/Contact";
import Linker from "./components/Linker";
import Menu from "./components/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <Linker />
      <Menu />
      <About />
      <SliderSlick />
      <Grid />
      <Contact />
    </>
  );
}

export default App;
