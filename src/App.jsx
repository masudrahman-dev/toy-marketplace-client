import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";

const App = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className=" container mx-auto text-center">
      <Header></Header>
      <AutoplaySlider
        className="border "
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
      >
        <div>
          1
          <img src="https://source.unsplash.com/user/c_v_r/1600x900" alt="" />
        </div>
        <div>
          2
          <img src="https://source.unsplash.com/user/c_v_r/1600x900" alt="" />
        </div>
        <div>
          3
          <img src="https://source.unsplash.com/user/c_v_r/1600x900" alt="" />
        </div>
        <div>
          4
          <img src="https://source.unsplash.com/user/c_v_r/1600x900" alt="" />
        </div>
      </AutoplaySlider>
 
      <Footer></Footer>
    </div>
  );
};

export default App;
