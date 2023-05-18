import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GalleryCard from "../Gallery/GalleryCard";

const ShopByCategory = () => {
  return (
    <div className="container mx-auto mt-20">
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Motorcycles</Tab>
          <Tab>stylish car</Tab>
        </TabList>

        <TabPanel>
          <h2 className="font-semibold text-2xl">Sports Cars</h2>
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-4">
            <GalleryCard></GalleryCard>
            <GalleryCard></GalleryCard>
            <GalleryCard></GalleryCard>
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
