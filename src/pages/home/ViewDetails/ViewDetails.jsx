import { useLoaderData } from "react-router-dom";
import Rating from "../../../components/Icon/Rating";

const ViewDetails = () => {
  const product = useLoaderData();

  return (
    <div>
      <div className="gap-8  items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full rounded-lg dark:block"
          src={product?.product_url}
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {product?.product_name}
          </h2>
          <Rating></Rating>

          <p className="font-light text-gray-500 md:text-lg dark:text-gray-400">
            Price: ${product?.price}
          </p>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Stock:{product?.quantity}
          </p>
          <p className="mb-3 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Seller: {product?.seller_name}
          </p>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Email: {product?.seller_email}
          </p>
        </div>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-1 sm:py-16 lg:px-6">
        <div>
          <h3 className="text-2xl underline">Description</h3>
          <p className="mt-3 font-light text-gray-500 md:text-lg dark:text-gray-400">
            {product?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
