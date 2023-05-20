import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GalleryCard from "../Gallery/GalleryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";
import { useParams } from "react-router-dom";
// import ShortByCategoryCard from "./ShortByCategoryCard";

const ShopByCategory = () => {
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
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Shop by Category
      </h1>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Motorcycles</Tab>
          <Tab>Stylish car</Tab>
        </TabList>

        <TabPanel>
          <h2 className="font-semibold text-2xl">Sports Cars</h2>
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-4">
            {/* <ShortByCategoryCard></ShortByCategoryCard> */}
            <GalleryCard></GalleryCard>
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="font-semibold text-2xl">Motorcycles</h2>
          <GalleryCard></GalleryCard>
          <GalleryCard></GalleryCard>
          <GalleryCard></GalleryCard>
        </TabPanel>
        <TabPanel>
          <h2 className="font-semibold text-2xl">Stylish car</h2>
          <GalleryCard></GalleryCard>
          <GalleryCard></GalleryCard>
          <GalleryCard></GalleryCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
