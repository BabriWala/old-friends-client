import React from "react";

const Seller = (props) => {
    const {url, name, email, status} = props.seller;
    const handleMakeVerified = props.handleMakeVerified;
    const handleSellerDelete = props.handleSellerDelete;
    // console.log(props)
    console.log(url, name, email, status)
  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
      <td className="pl-4 cursor-pointer">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img
              className="w-full h-full"
              src={url}
              alt=""
            />
          </div>
          <div className="pl-4">
            <p className="font-medium">{name}</p>
          </div>
        </div>
      </td>
      <td className="pl-12">
        <p className="text-sm font-medium leading-none text-gray-800">{email}</p>
      </td>
      <td className="pl-12">
      {
        status === "Verified" ?
        <button disabled className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Verified</button>
        :
        <button onClick={()=>handleMakeVerified(props.seller._id)} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Make Verified</button> 
      }
      </td>
      <td className="pl-20">
      <button onClick={()=>handleSellerDelete(props.seller._id)} className="mx-2 my-2 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-6 py-2 text-xs">Delete</button>
      </td>
    </tr>
  );
};

export default Seller;
