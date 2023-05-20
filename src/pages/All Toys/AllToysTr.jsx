import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const AllToysTr = ({ product, index }) => {
  const { product_url, category, price, product_name, quantity, rating } =
    product;
  console.log("product :>> ", product);

  return (
    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="w-4 px-4 py-3">
        <div className="flex items-center">{index + 1}</div>
      </td>
      <th
        scope="row"
        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          src={product_url}
          alt="iMac Front Image"
          className="w-auto h-8 mr-3"
        />
        {product_name}
      </th>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          {category}
        </span>
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">
          <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
          {quantity}
        </div>
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        $ {price}
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex justify-center gap-2">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <span className="ml-1 text-gray-500 dark:text-gray-400">
            {rating}
          </span>
        </div>
      </td>
      <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <Link to="/view_details"> Details</Link>
      </td>
    </tr>
  );
};

export default AllToysTr;
