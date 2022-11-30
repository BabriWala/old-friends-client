import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import axios from "axios";


const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = data =>{
    console.log(data)
  }

  return (
    <div>
      <div className="h-full  w-full pb-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow-lg border rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p
              tabIndex={0}
              ariarole="heading"
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Add a product For Sale.
            </p>
            <form onSubmit={handleSubmit(handleAddProduct)}>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                Product Name
                </label>
                <input
                  aria-label="enter your full name"
                  ariarole="input"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("productName")}
                />
              </div>
              <div className="flex justify-center mt-5">
                <div className="w-96">
                  <label
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Select Product Condition Type:
                  </label>
                </div>
              </div>
              <div className="mx-auto pb-5 flex justify-center">
                {/* Code block starts */}
                <div className="flex items-center">
                  <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      defaultChecked
                      type="radio"
                      name="radio"
                      value="Excellent"
                      className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                      {...register("productCondition")}
                    />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                  </div>
                  <p className="ml-2 text-sm leading-4 font-normal text-gray-800 ">
                    Excellent
                  </p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex items-center ml-6">
                  <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      type="radio"
                      name="radio"
                      value="Good"
                      className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                      {...register("productCondition")}
                    />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                  </div>
                  <p className="ml-2 text-sm leading-4 font-normal text-gray-800 ">
                    Good
                  </p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex items-center ml-6">
                  <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      type="radio"
                      name="radio"
                      value="Fair"
                      className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                      {...register("productCondition")}
                    />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                  </div>
                  <p className="ml-2 text-sm leading-4 font-normal text-gray-800 ">
                    Fair
                  </p>
                </div>
                {/* Code block ends */}
                <style>
                  {`  .checkbox:checked {
                        border: none;
                    }
                    .checkbox:checked + .check-icon {
                        display: flex;
                    }`}
                </style>
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Your Mobile Number
                </label>
                <input
                  aria-label="Your Mobile Number"
                  ariarole="input"
                  type="location"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("mobileNumber")}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Your Location
                </label>
                <input
                  aria-label="Your Location"
                  ariarole="input"
                  type="location"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("location")}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Select a Product Category: 
                </label>
                <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <select className="form-select
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700  focus:outline-none" aria-label="Default select example" {...register("category")}>
                        <option defaultValue value="panjabi">Panjabi</option>
                        <option value="t-shirts">T-Shirts</option>
                        <option value="jacket">Jacket</option>
                    </select>
                </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Product Description
                </label>
                <textarea
                  aria-label="resale price"
                  ariarole="input"
                  className="bg-gray-200 h-20 border rounded focus:outline-none font-medium leading-none text-gray-800 text-base p-3 w-full pl-3 mt-2"
                  {...register("productDescription")}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Original Price
                </label>
                <input
                  aria-label="Original price"
                  ariarole="input"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("originalPrice")}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Resale Price
                </label>
                <input
                  aria-label="Original price"
                  ariarole="input"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("resalePrice")}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Years of Use
                </label>
                <input
                  aria-label="Using Time"
                  ariarole="input"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("usingTime")}
                />
              </div>      
              <div className="flex justify-center mt-5">
                <div className="mb-3 w-96">
                  <label
                    htmlFor="formFile"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Upload Product Image
                  </label>
                  <input
                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="formFile"
                    {...register("img")}
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  ariarole="button"
                  aria-label="Add Product"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;