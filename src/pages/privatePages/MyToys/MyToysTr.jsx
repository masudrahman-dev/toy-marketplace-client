import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
const MyToysTr = ({ product, index }) => {
  console.log("product,index :>> ", product, index);
  const { product_url, category, price, product_name, quantity, rating } =
    product;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success ",
      cancelButton: "btn btn-info mr-3",
    },
    buttonsStyling: false,
  });

  const deleteBtn = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

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
          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
          alt="iMac Front Image"
          className="w-auto h-8 mr-3"
        />
        Apple iMac 27&#34;
      </th>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          Desktop PC
        </span>
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">
          <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
          95
        </div>
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        1.47
      </td>

      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex justify-center gap-2">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <span className="ml-1 text-gray-500 dark:text-gray-400">
            {rating}
          </span>
        </div>
      </td>

      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        John Doe
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        johndoe@gmail.com
      </td>
      <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <label htmlFor="edit-modal">Edit</label>
      </td>
      <td
        onClick={deleteBtn}
        className="px-4  link py-2 font-medium text-rose-600 whitespace-nowrap dark:text-rose-600 "
      >
        Delete
      </td>
    </tr>
  );
};

export default MyToysTr;
