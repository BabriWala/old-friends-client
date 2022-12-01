import React from 'react';

const MySingleProduct = ({handleDeleteProduct, handleAdvertise, myProduct}) => {
    
    const {productName, resalePrice, saleStatus, productPictureURL} = myProduct;
    return (
        <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
      <td className=" cursor-pointer">
        <div className="flex items-center">
        <div className="w-10 h-10">
            <img
              className="w-full h-full"
              src={productPictureURL}
              alt=""
            />
          </div>
          <div className="pl-5">
            <p className="font-medium">{productName}</p>
          </div>
        </div>
      </td>
      <td className="">
        <p className="text-sm font-medium leading-none text-gray-800">{resalePrice}</p>
      </td>
      <td className="">
        <p className="text-sm font-medium leading-none text-gray-800">{saleStatus}</p>
      </td>
      <td>
      {
        saleStatus === "available" ?
        <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Advertise</button>
        :
        (
        saleStatus === "advertising" ?
        <button disabled onClick={()=>handleAdvertise(myProduct._id)} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Already Advertised</button> 

        :
        <button disabled onClick={()=>handleAdvertise(myProduct._id)} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Already Sold</button> 
        )
      }
      </td>
      <td className="">
      <button onClick={()=>handleDeleteProduct(myProduct._id)} className="mx-2 my-2 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-6 py-2 text-xs">Delete</button>
      </td>
    </tr>
    );
};

export default MySingleProduct;