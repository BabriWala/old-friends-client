import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import {AuthContext} from "../../Context/AuthProvider";
import Modal from "./Modal";

const CategoryProducts = () => {
  const products = useLoaderData();
  // console.log(products)
  const {user} = useContext(AuthContext);
  const [selectedItem, setSelectedItem] = useState(null)

  // console.log(selectedItem)
  // const {register, handleSubmit, handleAddProduct} = []
  // console.log(Boolean(selectedItem.length))

  return (
    <div>
      <div className="py-24 flex-col items-center justify-center  px-4">
        <h1 className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800">
          All Collection Of {products[0].category.toUpperCase()}
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 mt-4 mb-5"
        >
          Here are all qualityful products.
        </p>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 ">
          {products.map((product) => (
            <SingleProduct setSelectedItem={setSelectedItem}  key={product._id} product={product}></SingleProduct>
          ))}
        </div>
      </div>
     {
       selectedItem &&
      <Modal selectedItem={selectedItem} setSelectedItem={setSelectedItem}></Modal>
     } 

    </div>
  );
};

export default CategoryProducts;
