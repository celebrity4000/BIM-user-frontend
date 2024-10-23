import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import course from "../assets/courses/course2.png";
import { FaUser } from "react-icons/fa";
import icon from "../assets/courses/icon1.png";
import { FaCheck } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiClock } from "react-icons/hi2";
import { BsBarChart } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { FaKey } from "react-icons/fa";
import Footer from "../components/Footer";
import tool1 from "../assets/courses/tool1.png";
import tool2 from "../assets/courses/tool2.png";
import tool3 from "../assets/courses/tool3.png";
import tool4 from "../assets/courses/tool4.png";
import tool5 from "../assets/courses/tool5.png";
import tool6 from "../assets/courses/tool6.png";
import tool7 from "../assets/courses/tool7.png";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  //scroll to top on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-blue-600 mt-5">Published 20 Jan 2022</h1>
        <h1 className="font-bold text-5xl w-1/2 text-center">
          BIM Professional - Architecture(Basics to Pro Level)
        </h1>
        <img src={course} alt="Course" className="w-[80%] rounded-md " />
      </div>
      <div className=" flex justify-between mx-36 my-5">
        <div className="flex flex-col justify-between py-6 border  shadow-xl p-4 bg-white rounded-lg h-[120px] w-[20%]">
          <div className="flex items-center gap-2">
            <FaUser color="blue" size={25} />
            <h1 className="font-bold text-green-400 text-lg">
              Instructor Name
            </h1>
          </div>
          <h1 className="font-bold text-xl">SYED AMAAN QUADRI</h1>
        </div>
        <div className="flex flex-col justify-between py-6 border  shadow-xl p-4 bg-white rounded-lg h-[120px] w-1/4">
          <div className="flex items-center gap-2">
            <FaUser color="blue" size={25} />
            <h1 className="font-bold text-green-400 text-lg">Category</h1>
          </div>
          <h1 className="font-bold text-xl">
            BIM - Package Course(Recommended)
          </h1>
        </div>
        <div className="flex flex-col justify-between py-6 border  shadow-xl p-4 bg-white rounded-lg h-[120px] w-[20%] ">
          <div className="flex items-center gap-2">
            <FaUser color="blue" size={25} />
            <h1 className="font-bold text-green-400 text-lg">Review</h1>
          </div>
          <h1 className="font-bold text-xl">⭐⭐⭐⭐</h1>
        </div>
        <div className="flex flex-col justify-between py-6 border  shadow-xl p-4 bg-white rounded-lg h-[120px] w-[20%] ">
          <div className="flex items-center gap-2">
            <FaUser color="blue" size={25} />
            <h1 className="font-bold text-green-400 text-lg">Type</h1>
          </div>
          <h1 className="font-bold text-xl">LIVE CLASS</h1>
        </div>
      </div>

      {/* course description */}

      <div className="mx-36 my-10 flex">
        {/* left portion of description */}
        <div className="w-2/3">
          <div className="flex justify-between">
            <div>
              <div className="w-36 py-3 flex justify-center items-center rounded-full text-lg font-bold  bg-[#FF006B] text-white">
                Overview
              </div>
            </div>
            <div>
              <div className="w-36 py-3 flex justify-center items-center rounded-full text-lg font-bold border-2 border-[#FF006B]   ">
                Curriculumn
              </div>
            </div>
            <div>
              <div className="w-36 py-3 flex justify-center items-center rounded-full text-lg font-bold border-2 border-[#FF006B]  ">
                Instructor
              </div>
            </div>
            <div>
              <div className="w-36 py-3 flex justify-center items-center rounded-full text-lg font-bold border-2 border-[#FF006B] ">
                Reviews
              </div>
            </div>
            <div>
              <div className="w-36 py-3 flex justify-center items-center rounded-full text-lg font-bold border-2 border-[#FF006B] ">
                QA
              </div>
            </div>
          </div>

          {/* course requirement */}

          <div className="my-10 ">
            <div className="flex gap-5">
              <img src={icon} alt="icon" className="w-8" />
              <h1 className="font-bold text-2xl">Course Requirements</h1>
            </div>
            <div className="mx-12 my-5 flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div className="p-1 flex justify-center items-center bg-blue-100 rounded-md border-2 border-blue-400">
                  <FaCheck color="blue" size={15} />
                </div>
                <h1 className="text-xl">
                  Who can enroll - Fresh civil engineers, architects, interior
                  designers with Dip., Bachelors or masters.
                </h1>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-1 flex justify-center items-center bg-blue-100 rounded-md border-2 border-blue-400">
                  <FaCheck color="blue" size={15} />
                </div>
                <h1 className="text-xl">Basic Knowledge of computer</h1>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-1 flex justify-center items-center bg-blue-100 rounded-md border-2 border-blue-400">
                  <FaCheck color="blue" size={15} />
                </div>
                <h1 className="text-xl">
                  Who can enroll - Fresh civil engineers, architects, interior
                  designers with Dip., Bachelors or masters.
                </h1>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-1 flex justify-center items-center bg-blue-100 rounded-md border-2 border-blue-400">
                  <FaCheck color="blue" size={15} />
                </div>
                <h1 className="text-xl">Basic Knowledge of computer</h1>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-1 flex justify-center items-center bg-blue-100 rounded-md border-2 border-blue-400">
                  <FaCheck color="blue" size={15} />
                </div>
                <h1 className="text-xl">
                  Who can enroll - Fresh civil engineers, architects, interior
                  designers with Dip., Bachelors or masters.
                </h1>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-1 flex justify-center items-center bg-blue-100 rounded-md border-2 border-blue-400">
                  <FaCheck color="blue" size={15} />
                </div>
                <h1 className="text-xl">Basic Knowledge of computer</h1>
              </div>
            </div>
          </div>

          {/* course description */}

          <div className="my-10 ">
            <div className="flex gap-5">
              <img src={icon} alt="icon" className="w-8" />
              <h1 className="font-bold text-2xl">Course Description</h1>
            </div>
            <div className="mx-12 my-5 flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div className="p-2 flex justify-center items-center bg-green-200 rounded-full">
                  <IoMdCheckmarkCircleOutline color="green" size={20} />
                </div>
                <h1 className="text-xl">
                  Become master in implementing BIM in just 6 months
                </h1>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 flex justify-center items-center bg-green-200 rounded-full">
                  <IoMdCheckmarkCircleOutline color="green" size={20} />
                </div>
                <h1 className="text-xl">
                  Become master in implementing BIM in just 6 months
                </h1>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 flex justify-center items-center bg-green-200 rounded-full">
                  <IoMdCheckmarkCircleOutline color="green" size={20} />
                </div>
                <h1 className="text-xl">
                  Become master in implementing BIM in just 6 months
                </h1>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 flex justify-center items-center bg-green-200 rounded-full">
                  <IoMdCheckmarkCircleOutline color="green" size={20} />
                </div>
                <h1 className="text-xl">
                  Become master in implementing BIM in just 6 months
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* right bar of description */}
        <div className="w-1/3 pl-20 py-10 flex flex-col gap-3 ">
          <h1 className="font-bold text-3xl">RS 29,999.00</h1>
          <button className="bg-[#FF006B] w-2/3 py-2 text-white font-bold text-xl rounded-xl mt-5">
            Add to Cart
          </button>
          <button
            className="border-[#FF006B] border w-2/3 py-2  font-bold text-xl rounded-xl"
            onClick={() => navigate("/payment")}
          >
            Buy Now
          </button>
          <div className="flex gap-3 items-center mt-5">
            <div className="bg-blue-100 p-2  rounded-full flex justify-center items-center">
              <AiOutlineThunderbolt color="blue" size={20} />
            </div>
            <h1 className="font-bold text-xl">Course Includes :</h1>
          </div>
          <div className="flex gap-3 items-center">
            <HiClock color="black" size={20} />
            <h1 className="font-bold text-xl">Course Duration</h1>
            <h1 className="text-lg">6 months</h1>
          </div>
          <div className="flex gap-3 items-center">
            <BsBarChart color="black" size={20} />
            <h1 className="font-bold text-xl">Skill Level</h1>
            <h1 className="text-lg">Pro</h1>
          </div>
          <div className="flex gap-3 items-center">
            <FaBook color="black" size={20} />
            <h1 className="font-bold text-xl">Lectures</h1>
            <h1 className="text-lg">0 lessons</h1>
          </div>
          <div className="flex gap-3 items-center">
            <FaUser color="black" size={20} />
            <h1 className="font-bold text-xl">Enrolled</h1>
            <h1 className="text-lg">0</h1>
          </div>
          <div className="flex gap-3 items-center">
            <PiCertificateFill color="black" size={22} />
            <h1 className="font-bold text-xl">Certificate of Completion</h1>
          </div>
          <div className="flex gap-3 items-center">
            <FaKey color="black" size={20} />
            <h1 className="font-bold text-xl">Full Lifetime Access</h1>
          </div>
        </div>
      </div>

      {/* tools used in course */}

      <div className="flex flex-col mx-36 my-10">
        <div className="flex gap-5">
          <img src={icon} alt="icon" className="w-8" />
          <h1 className="font-bold text-2xl">Tools we are teaching</h1>
        </div>
        <div className="flex gap-10 m-5 flex-wrap">
          <img src={tool1} alt="tool1" className="min-w-24 h-24" />
          <img src={tool2} alt="tool2" className="min-w-24 h-24" />
          <img src={tool3} alt="tool3" className="min-w-24 h-24" />
          <img src={tool4} alt="tool4" className="min-w-24 h-24" />
          <img src={tool5} alt="tool5" className="min-w-24 h-24" />
          <img src={tool6} alt="tool6" className="min-w-24 h-24" />
          <img src={tool7} alt="tool7" className="min-w-24 h-24" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Course;
