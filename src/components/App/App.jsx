import Access from "../Access/Access";
import Bestof from "../Bestof/Bestof";
import Cinema from "../Cinema/Cinema";
import Comments from "../Comments/Comments";
import Footer from "../Footer/Footer";
import Free from "../Free/Free";
import HowToUse from "../HowToUse/HowToUse";
import Kids from "../Kids/Kids";
import Menu from "../Menu/Menu";
import Questions from "../Questions/Questions";
import Slider from "../Slider/Slider";

const App = () => {
  return (
    <>
      <Menu />
      <Slider />
      <Bestof />
      <Access />
      <HowToUse />
      <Free />
      <Kids />
      <Cinema />
      <Comments/>
      <Questions/>
      <Footer/>
    </>
  );
};

export default App;
