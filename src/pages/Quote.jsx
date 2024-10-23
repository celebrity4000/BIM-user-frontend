import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import quoteImage from "../assets/contact/quote.jpg";

const Quote = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        style={{
          background: "linear-gradient(to bottom right, #0067BF, #DD2D66)",
        }}
        className="w-full flex "
      >
        <div className="flex-1 flex flex-col items-start p-8 bg-white px-40 py-20">
          <h1 className="text-2xl font-bold mb-2">
            Request Quotation For Our Courses
          </h1>
          <h2 className="text-lg mb-6">
            Are you an architect or engineer looking to enhance your skills with
            our industry-leading BIM training programs? Please fill out the form
            below, and one of our representatives will promptly get back to you
            with detailed information.
          </h2>
          <form className="w-full">
            {/* Personal Information */}
            <div className="mb-4">
              <h3 className="text-lg font-bold">Personal Information:</h3>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Full name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Your phone number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyName"
                type="text"
                placeholder="Your Company Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyWebsite"
              >
                Company Website (if applicable)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyWebsite"
                type="text"
                placeholder="Your Company Website"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="position"
              >
                Position/Job Title
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="position"
                type="text"
                placeholder="Your Position at Company"
              />
            </div>

            {/* Course of Interest */}
            <div className="mb-4">
              <h3 className="text-lg font-bold">Course of Interest:</h3>
              <div className="flex flex-col space-y-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">
                    International BIM Coordinator Training & Internship Program
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Advanced BIM Management</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">BIM Implementation Strategies</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">
                    Customized BIM Training (Please specify in the message)
                  </span>
                </label>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-4">
              <h3 className="text-lg font-bold">Additional Information:</h3>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="howDidYouHear"
                >
                  How did you hear about us?
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="howDidYouHear"
                  type="text"
                  placeholder="How did you hear about us?"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="challengesGoals"
                >
                  What specific challenges or goals are you hoping to address
                  through our courses?
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="challengesGoals"
                  type="text"
                  placeholder="Your challenges or goals"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Please share any additional details or questions you have"
                rows={4}
              />
            </div>

            {/* Preferred Contact Method */}
            <div className="mb-4">
              <h3 className="text-lg font-bold">Preferred Contact Method:</h3>
              <div className="flex flex-col space-y-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    className="form-radio"
                  />
                  <span className="ml-2">Phone</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    className="form-radio"
                  />
                  <span className="ml-2">Email</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-[#FF006B] hover:bg-[#ff006a8f] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* image  */}

        <img src={quoteImage} className="w-[35%] object-cover" />
      </div>

      <Footer />
    </div>
  );
};

export default Quote;
