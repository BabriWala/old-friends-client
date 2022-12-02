import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../Context/AuthProvider';
import MySingleProduct from './MySingleProduct';
import Loader from '../Shared/Loader/Loader';
// import Loader from '../Shared/Loader/Loader'


   

const MyProduct = () => {

    const {currentUser, loading} = useContext(AuthContext)

    // if(loading){
    //     return <Loader></Loader>
    // }
    
    const {data: myProducts, isLoading, refetch} = useQuery({
        queryKey: ['My Product'],
        queryFn: async ()=>{
            const res = await axios.get(`https://old-friends-server.vercel.app/products?email=${currentUser?.email}`);
            return res.data;
        }
    })

    // console.log(myProducts)

    const handleDeleteProduct = (id)=>{
        const agree = window.confirm(`Are You sure you want to delete this product?`);
        // console.log(agree);
        // console.log(id)
        if(agree){
          axios.delete(`https://old-friends-server.vercel.app/products/${id}`)
          .then(res=>{
            refetch()
            toast.success('Product SuccessFully Deleted');
            // console.log(res)
          })
        }
      }
    const handleAdvertise = (id)=>{
        const agree = window.confirm(`Are You sure you want to advertise this product?`);
        // console.log(agree);
        // console.log(id)
        if(agree){
          axios.put(`https://old-friends-server.vercel.app/products/${id}`)
          .then(res=>{
            refetch()
            toast.success('Product SuccessFully Advertised');
            // console.log(res)
          })
        }
      }



    return (
        <div>
        <div className="w-full sm:px-6 mt-20 md:mt-0">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
               My Product
              </p>
            </div>
          </div>
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left">Product Name</th>
                  <th className="font-normal text-left">Resale Price</th>
                  <th className="font-normal text-left">Sale Status</th>
                  <th className="font-normal text-left">Make Advertise</th>
                  <th className="font-normal text-left">Action</th>
                </tr>
              </thead>
              <tbody className="w-full">
                
                {
                    myProducts?.length ?
                    
                    myProducts.map(myProduct => <MySingleProduct key={myProduct._id} myProduct={myProduct} handleDeleteProduct={handleDeleteProduct} handleAdvertise={handleAdvertise} ></MySingleProduct>)
                    
                    :

                    
                    <Loader></Loader>
                    
                }        
               </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyProduct;