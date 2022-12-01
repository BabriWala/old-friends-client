import React from "react";
import {Link} from "react-router-dom";

const ProductCategories = () => {
  return (
    <div>
      <div className="py-24 flex-col items-center justify-center  px-4">
        <h1
          className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800"
        >
          Our Product Categories
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 mt-4 mb-5"
        >
          Here are our all product categories. Kindly click on a category to see category wise products.
        </p>
        <div className="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6">
          <Link to={'/category/panjabi'}>
          <div className="flex shadow-lg rounded p-5 lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            <div>
              <img
                src="https://i.ibb.co/cwWYcmj/NIR0548copy-345x345-2x.webp"
                alt="woman smiling"
              />
              <h2 className="text-center text-xl font-semibold leading-5 mt-8 text-gray-800">
                Panjabi
              </h2>
            </div>
          </div>
          </Link>
          <Link to={'/category/t-shirts'}>
          <div className="flex shadow-lg rounded p-5 lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            <div>
              <img
                src="https://i.ibb.co/Y0gsz5L/Ue54e6eaf07d34094a795f647683f77d7l.jpg"
                alt="plant held by a man"
              />
              <h2 className="text-center text-xl font-semibold leading-5 mt-8 text-gray-800">
                T-Shirts
              </h2>
            </div>
          </div>
          </Link>
          <Link to={'/category/jacket'}>
          <div className="flex shadow-lg rounded p-5 xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
            <div>
              <img
                src="https://i.ibb.co/kQgRJ9q/104314-BLK-1.webp"
                alt="Delighful breakfast"
              />
              <h2 className="text-center text-xl font-semibold leading-5 mt-8 text-gray-800">
                Jacket
              </h2>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
