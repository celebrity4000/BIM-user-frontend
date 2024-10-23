import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/navbar/bim-logo.png";

const Payment = () => {
  return (
    <div>
      <div className="mx-20 my-10">
        <img src={logo} alt="logo" className="w-48 mb-10" />
      </div>
      <div className="flex mx-32 px-5 ">
        {/* Payment Details Section */}
        <div className="w-1/2 pr-10">
          <h2 className="font-bold text-2xl mb-5">Payment Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-md font-bold text-gray-700">
                Email
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="hello@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-bold text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="+1234567890"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-bold text-gray-700">
                Name on Card
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="John Doe"
              />
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-md font-bold text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-md font-bold text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md"
            >
              Pay Now
            </button>
          </form>
        </div>

        {/* Cart Items, Coupon, Subtotal, and Total Section */}
        <div className="w-1/2 pl-10">
          <h2 className="font-bold text-2xl mb-5">Your Cart</h2>
          <div className="border-b border-gray-200 pb-4 mb-4">
            {/* Example Cart Item */}
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold">Product Name</h3>
                <p className="text-gray-600">Quantity: 1</p>
              </div>
              <p className="text-lg">Rs 100000</p>
            </div>
            {/* Add more cart items as needed */}
          </div>

          <div className="mb-4">
            <label className="block text-md font-bold text-gray-700">
              Coupon Code
            </label>
            <div className="flex border border-gray-300 rounded-md">
              <input type="text" className=" p-2 flex-1  " />
              <button className="text-gray-400 p-2 rounded-md">Apply</button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-lg">Rs 100000</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Discount</p>
              <p className="text-lg">-Rs 70001</p>
            </div>
            <div className="flex justify-between font-bold">
              <p className="text-lg">Total</p>
              <p className="text-lg">Rs 29999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
