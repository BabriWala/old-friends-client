import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import {toast} from 'react-hot-toast';

const Modal = (props) => {
    const {user} = useContext(AuthContext);
    const {productName, resalePrice} = props.selectedItem;
    const setSelectedItem= props.setSelectedItem;

    // const selectdItem = props.selectdItem;
    // console.log(selectdItem)
    const {register, handleSubmit} = useForm()

    const handleSumbitProduct = data =>{
        const meetingLocation = data.meetingLocation;
        const mobileNumber = data.mobileNumber;
        // console.log(meetingLocation, mobileNumber)
        const bookedProduct = {
            meetingLocation,
            mobileNumber,
            buyerName: user.displayName,
            buyerEmail: user.email,
            productName,
            productResalePrice: resalePrice
        }
        axios.post('http://localhost:5000/bookedProducts',bookedProduct)
        .then(res => {
            if(res.data.acknowledged){
                toast.success('Product Successfully Booked')
            setSelectedItem(null)

            }
        })
        // console.log(bookedProduct)
    }


    return (
      <>
      <input type="checkbox" id="friendsModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="friendsModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p
              tabIndex={0}
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Booking For {productName}
            </p>
          <form onSubmit={handleSubmit(handleSumbitProduct)}>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                Your Name
                </label>
                <input
                  aria-label="enter your full name"
                  type="text"
                  disabled
                  defaultValue={user.displayName}
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                //   {...register("buyerName", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                Your Email
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue={user.email}
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                //   {...register("buyerEmail", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                Product Name
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue={productName}
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                //   {...register("productName", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                Resale Price
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue={resalePrice}
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                //   {...register("productResalePrice", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                Your Mobile Number
                </label>
                <input
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("mobileNumber", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                Meeting Location
                </label>
                <input
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("meetingLocation", { required: true })}
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  aria-label="Add Product"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                >
                  Submit
                </button>
              </div>
            </form>
        </div>
      </div>
      </>
    );
};

export default Modal;