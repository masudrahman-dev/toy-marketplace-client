
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <div className="container mx-auto border mt-20">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <h1 className="text-3xl font-semibold ">Gallery</h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-4">
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
      </div>
  
    </div>
  );
};

export default Gallery;
