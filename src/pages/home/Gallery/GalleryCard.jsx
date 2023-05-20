import { Link } from "react-router-dom";

import Rating from "../../../components/Icon/Rating";
import LazyLoad from "react-lazy-load";
import "./GalleryCard.css"
const GalleryCard = () => {

  return (
    <div className=" mx-auto ">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-8 ">
          <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.hobbytoys.co/cdn/shop/products/Porsche911RSRd_470x.jpg?v=1670825210"
              alt=""
            />
          </LazyLoad>
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <Rating></Rating>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <button
              onClick={() => {
                // Swal.fire(
                //   "The Internet?",
                //   "That thing is still around?",
                //   "question"
                // );
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to="/view_details">View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
