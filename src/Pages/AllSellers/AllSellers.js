import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import Seller from "./Seller";
import {toast} from 'react-hot-toast';

const AllSellers = () => {
  const [show, setShow] = useState(null);
  const[showModal,setShowModal]=useState(true)
    const {data: sellers, isLoading, refetch} = useQuery({
        queryKey: ['All Sellers'],
        queryFn: async ()=>{
            const res = await axios.get('http://localhost:5000/sellers');
            return res.data;
        }
    })

    // console.log(sellers)
    const handleSellerDelete = (id)=>{
      const agree = window.confirm(`Are You sure you want to delete?`);
      // console.log(agree);
      // console.log(id)
      if(agree){
        axios.delete(`http://localhost:5000/sellers/${id}`)
        .then(res=>{
          refetch()
          toast.success('User SuccessFully Deleted');
          // console.log(res)
        })
      }
    }

    const handleMakeVerified = (id)=>{
      const agree = window.confirm(`Are You sure you want to verified?`);
      // console.log(agree);
      // console.log(id)
      if(agree){
        axios.put(`http://localhost:5000/sellers/${id}`)
        .then(res=>{
          refetch()
          toast.success('Seller Successfully Verified');
          console.log(res)
        })
      }
    }

  return (
    <div>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              All Sellers
            </p>
            <div>
              <Link to={'/allBuyers'}>
              <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  All Buyers
                </p>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Seller Name</th>
                <th className="font-normal text-left pl-12">Email</th>
                <th className="font-normal text-left pl-12">Make Verified</th>
                <th className="font-normal text-left pl-20">Delete Seller</th>
              </tr>
            </thead>
            <tbody className="w-full">
              
              {
                sellers?.map(seller => <Seller seller={seller} handleSellerDelete={handleSellerDelete} handleMakeVerified={handleMakeVerified} key={seller._id}></Seller>)
              }        
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
