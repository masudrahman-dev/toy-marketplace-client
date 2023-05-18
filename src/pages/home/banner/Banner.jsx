import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <AwesomeSlider>
        <div>
          <img src="https://www.hobbytoys.co/cdn/shop/products/BburagoFerrariSF90StradaleSignatureEdition_360x.jpg?v=1681706909" alt="" />
        </div>
        <div>
          <img src="https://www.hobbytoys.co/cdn/shop/files/1-18_BugattiBolide_e4cb6d49-f1e1-43b4-847e-5ed6ed683be8_970x.jpg?v=1668761072" alt="" />
        </div>
        <div>
          <img src="https://www.hobbytoys.co/cdn/shop/products/maisto-ford-mustang-shelby-gt500-blau-2020-1_2048x2048.jpg?v=1621677001" alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
