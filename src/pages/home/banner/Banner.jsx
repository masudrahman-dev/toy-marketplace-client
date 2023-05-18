import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="grid  gap-8   lg:grid-cols-2">
        <div className="mr-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div>
          <AwesomeSlider>
            <div>
              <img
                src="https://www.hobbytoys.co/cdn/shop/products/BburagoFerrariSF90StradaleSignatureEdition_360x.jpg?v=1681706909"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.hobbytoys.co/cdn/shop/files/1-18_BugattiBolide_e4cb6d49-f1e1-43b4-847e-5ed6ed683be8_970x.jpg?v=1668761072"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.hobbytoys.co/cdn/shop/products/maisto-ford-mustang-shelby-gt500-blau-2020-1_2048x2048.jpg?v=1621677001"
                alt=""
              />
            </div>
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
