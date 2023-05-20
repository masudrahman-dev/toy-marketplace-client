import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  const [tabData, setTabData] = useState([]);

  const fetchData = async (selected) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/category/${selected}`
      );
      const data = response.data;
      setTabData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData("sports_car");
  }, []);
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Shop by Category
      </h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => fetchData("sports_car")}>Sports Car</Tab>
          <Tab onClick={() => fetchData("stylish_car")}>Stylish Car</Tab>
          <Tab onClick={() => fetchData("motorcycle")}>Motorcycle Car</Tab>
        </TabList>

        <TabPanel>
          {tabData?.map((product) => (
            <ShopByCategoryCard key={product?._id} product={product} />
          ))}
        </TabPanel>
        <TabPanel>
          {tabData?.map((product) => (
            <ShopByCategoryCard key={product?._id} product={product} />
          ))}
        </TabPanel>
        <TabPanel>
          {tabData?.map((product) => (
            <ShopByCategoryCard key={product?._id} product={product} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
