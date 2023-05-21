import Banner from "./banner/Banner";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import ServiceTeam from "../ExtraPages/ServiceTeam";
import CustomarReview from "../ExtraPages/CustomarReview";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }


  return (
    <div>
      <Banner ></Banner>
      <Gallery products={products}></Gallery>
      <ShopByCategory></ShopByCategory>
      <ServiceTeam/>
      <CustomarReview/>
    </div>
  );
};

export default Home;
