import React from "react";
import { Link } from "react-router-dom";

const AdvertisedProducts = ({ advertisedProducts }) => {
  return (
    <div>
      <div>
        <div className="py-24 flex-col items-center justify-center  px-4">
          <h1 className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800">
            Our Advertised Products
          </h1>
          <div className="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6">
            {advertisedProducts?.map((product) => (
              <div key={product._id}>
                <Link to={`/category/${product.category}`}>
                  <div className="flex items-center shadow-lg rounded p-5 lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
                    <div className="">
                      <img className=" h-80"
                        src={product.productPictureURL}
                        alt={product.productName}
                      />
                      <h2 className="text-center text-xl font-semibold leading-5 mt-8 text-gray-800">
                        {product.productName}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProducts;

