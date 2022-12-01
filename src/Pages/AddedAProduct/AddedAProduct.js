import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {toast} from 'react-hot-toast';

import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";



const AddedAProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {user, loading, currentUser, logOut} = useContext(AuthContext);
  const navigate = useNavigate()
  // const email = user.email;
  
  // console.log(currentUser);
  // console.log(user.email)
  

  // console.log(currentUser)

  const handleAddProduct = data =>{
    // console.log(data)
    const category = data.category;
    const img = data.img[0];
    const location = data.location;
    const sellerMobileNumber = data.mobileNumber;
    const originalPrice = data.originalPrice;
    const productCondition = data.productCondition;
    const productDescription = data.productDescription;
    const productName = data.productName;
    const resalePrice = data.resalePrice;
    const usingTime = data.usingTime;
    
    
    const formData = new FormData();
    formData.append('image', img);

    
    if(currentUser.role === "seller"){
      axios.post(`https://api.imgbb.com/1/upload?key=0dfc4bdf5e5d26db206379e29f94506f`,formData)
    .then(res => {
      const imgURL = res.data.data.url;
      const product = {
        productPictureURL: imgURL,
        productName, 
        location, 
        productCondition,
        productDescription,
        category,
        resalePrice, 
        originalPrice, 
        usingTime, 
        datePosted: new Date(), 
        sellerMobileNumber,
        sellerName: currentUser.name,
        sellerImg: currentUser.url,
        sellerEmail: currentUser.email,
        sellerStatus: currentUser.status,
        role: currentUser.role,
        saleStatus: "available"
      }
      console.log(product)

      axios.post(`http://localhost:5000/products`, product)
      .then(res => {
        if(res.data.acknowledged){
          toast.success('Product Added SuccessFully')
          navigate('/myProduct')
        }
      })

    // console.log(product);
    })
    }else{
      logOut()
      .then(()=> navigate('/login'))
    }
    
    

    
  }

  return (
    <div>
      <div className="h-full  w-full pb-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow-lg border rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p
              tabIndex={0}
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
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("productName", { required: true })}
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
                      {...register("productCondition", { required: true })}
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
                      {...register("productCondition", { required: true })}
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
                      {...register("productCondition", { required: true })}
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
                  type="location"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("mobileNumber", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Your Location
                </label>
                <input
                  aria-label="Your Location"
                  type="location"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("location", { required: true })}
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
                    focus:text-gray-700  focus:outline-none" aria-label="Default select example" {...register("category", { required: true })}>
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
                  className="bg-gray-200 h-20 border rounded focus:outline-none font-medium leading-none text-gray-800 text-base p-3 w-full pl-3 mt-2"
                  {...register("productDescription", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Original Price
                </label>
                <input
                  aria-label="Original price"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("originalPrice", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Resale Price
                </label>
                <input
                  aria-label="Original price"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("resalePrice", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Years of Use
                </label>
                <input
                  aria-label="Using Time"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("usingTime", { required: true })}
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
                    {...register("img", { required: true })}
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  aria-role="button"
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

export default AddedAProduct;
