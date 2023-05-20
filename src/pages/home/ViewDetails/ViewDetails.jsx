import Rating from "../../../components/Icon/Rating";

const ViewDetails = () => {
  return (
    <div>
      <div className="gap-8  items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full rounded-lg dark:block"
          src="https://www.hobbytoys.co/cdn/shop/products/Porsche911RSRd_470x.jpg?v=1670825210"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Sports Car
          </h2>
          <Rating></Rating>

          <p className="font-light text-gray-500 md:text-lg dark:text-gray-400">
            Price: $12
          </p>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Stock: 7
          </p>
          <p className="mb-3 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Seller: Masud Rahman
          </p>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Email: masud@gmail.com
          </p>
        </div>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-1 sm:py-16 lg:px-6">
        <div>
          <h3 className="text-2xl underline">Description</h3>
          <p className="mt-3 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minus
            doloribus nulla modi voluptatibus veniam maxime esse! Necessitatibus
            quasi aliquam saepe tenetur reprehenderit aperiam animi excepturi.
            Libero sunt officiis iure dignissimos necessitatibus ad adipisci
            recusandae eum natus, expedita inventore tempore possimus illo!
            Molestias voluptatibus, culpa velit temporibus ipsam, eius nulla qui
            assumenda inventore repellendus deleniti mollitia optio! Error quam
            qui ad iste enim, libero perspiciatis obcaecati sint veritatis
            expedita saepe quaerat accusamus voluptates cumque consequuntur sed
            hic ipsa eaque cum rem eum necessitatibus, suscipit sapiente autem?
            Minima distinctio accusantium animi tempore cum quibusdam voluptates
            repudiandae ad fugit perspiciatis dolore illum eveniet officia a
            porro officiis repellat, voluptatum quaerat facere magnam fugiat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
