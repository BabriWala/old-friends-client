import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const SingleProduct = (props) => {
  // category​​,datePosted​​,location​​,originalPrice​​,productCondition​​,productDescription​​,productName​​,productPictureURL​​,resalePrice​​,role​​,sellerEmail​​,sellerMobileNumber​​,sellerStatus​​,usingTime
  // console.log(props)
  const {
    datePosted,
    location,
    originalPrice,
    productCondition,
    productDescription,
    productName,
    productPictureURL,
    resalePrice,
    role,
    sellerEmail,
    sellerMobileNumber,
    sellerStatus,
    sellerName,
    usingTime,
  } = props.product;
  // console.log(datePosted,
  //   location,
  //   originalPrice,
  //   productCondition,
  //   productDescription,
  //   productName,
  //   productPictureURL,
  //   resalePrice,
  //   role,
  //   sellerEmail,
  //   sellerMobileNumber,
  //   sellerStatus,
  //   usingTime,);
  // console.log(props.product)

  return (
    <div className="shadow rounded p-5">
      <img className="rounded" src={productPictureURL} alt={productName} />
      <h2 className=" text-xl font-semibold leading-5 mt-8 text-gray-800">
        Product Name: {productName}
      </h2>
      <h2 className="text-base font-semibold leading-5 mt-5 text-gray-800">
        Location: {location}
      </h2>
      <h2 className="text-base font-semibold leading-5 mt-5 text-gray-800">
        Resale Price: {resalePrice}$
      </h2>
      <h2 className="text-base font-semibold leading-5 mt-5 text-gray-800">
        Original Price: {originalPrice}$
      </h2>
      <h2 className="text-base font-semibold leading-5 mt-5 text-gray-800">
        Years of Use: {usingTime} Years
      </h2>
      <h2 className="text-base font-semibold leading-5 mt-5 text-gray-800">
        Posted Date: {(new Date(datePosted)).toLocaleString()}
      </h2>
      <h2 className="text-base font-semibold flex items-center leading-5 mt-5 text-gray-800">
        Seller Name:<span className="mr-5">{sellerName}</span> {(sellerStatus === "Verified") && <AiFillCheckCircle />}
      </h2>
      <button  className=" w-full my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white py-2 text-xs mt-5">
        Book Now
      </button>
    </div>
  );
};

export default SingleProduct;
