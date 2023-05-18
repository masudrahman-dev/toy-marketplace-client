import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="  ">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
