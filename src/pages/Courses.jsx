import React from "react";
import Navbar from "../components/Navbar";
import blog1 from "../assets/courses/largeBlog.png";
import blog2 from "../assets/courses/blog.png";
import courses from "../assets/courses/courses.png";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";
import course3 from "../assets/courses/course3.png";
import course4 from "../assets/courses/course4.png";

const courseData = [
  {
    id: 1,
    image: course4,
    subtitle: "For Architects & Civil Engineer",
    title: "International BIM Coordinator Training & Internship",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
  {
    id: 2,
    image: course3,
    subtitle: "For Mechanical & Electrical Engineer",
    title: "International BIM Coordinator Training & Internship",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
];

const Courses = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex justify-center pt-5">
        <h1 className="font-bold text-lg">Trending Courses</h1>
      </div>
      <div className="flex pl-48 p-8 space-x-20">
        {/* Left Large Card */}
        <div className="relative w-1/3 h-[570px]">
          <img
            src={blog1}
            alt="blog1"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent text-white rounded-b-lg">
            <h2 className="text-2xl font-bold mb-2">
              BIM Professional - Architecture (Basics to Pro Level)
            </h2>
          </div>
        </div>

        {/* Right Side with Two Cards */}
        <div className="w-1/2 space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6 flex gap-5">
            <img
              src={blog2}
              alt="blog2"
              className="w-60 h-48 object-cover rounded-lg"
            />
            <div className="flex-1" onClick={() => navigate("/courses/1")}>
              <h2 className="text-xl font-bold mb-2">
                BIM Professional - Architecture (Basics to Pro Level)
              </h2>
              <div className="flex items-center mb-4">
                {/* Golden Stars */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="gold"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.98 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.98-2.892a1 1 0 00-1.176 0l-3.98 2.892c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-500">(123 Reviews)</span>
              </div>
              <p className="text-gray-400 mb-4">
                BIM stands for Building Information Modeling, which is a
                software tool for digital design and construction.........
              </p>
              <div className="flex items-center">
                <span className="text-xl font-bold text-blue-500">
                  RS 29,999
                </span>
                <span className="text-lg text-gray-500 line-through ml-4">
                  1,00,000
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex gap-5">
            <img
              src={blog2}
              alt="blog2"
              className="w-60 h-48 object-cover rounded-lg"
            />
            <div className="flex-1 " onClick={() => navigate("/courses/1")}>
              <h2 className="text-xl font-bold mb-2">
                BIM Professional - Architecture (Basics to Pro Level)
              </h2>
              <div className="flex items-center mb-4">
                {/* Golden Stars */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="gold"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.98 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.98-2.892a1 1 0 00-1.176 0l-3.98 2.892c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-500">(123 Reviews)</span>
              </div>
              <p className="text-gray-400 mb-4">
                BIM stands for Building Information Modeling, which is a
                software tool for digital design and construction.........
              </p>
              <div className="flex items-center">
                <span className="text-xl font-bold text-blue-500">
                  RS 29,999
                </span>
                <span className="text-lg text-gray-500 line-through ml-4">
                  1,00,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* based on interest */}

      <div className="my-5 px-32">
        <h1 className="text-3xl font-bold mb-2">Based on your interest</h1>
        <h3 className="text-lg text-gray-600">
          We know the best things for You. Top picks for You.
        </h3>
      </div>

      <div className=" relative min-h-[70vh]  justify-center flex ">
        <div className="flex w-[50%] absolute z-10 space-x-8 py-10  justify-between">
          {courseData.map((course, index) => (
            <CourseCard
              image={course.image}
              subtitle={course.subtitle}
              title={course.title}
              rating={course.rating}
              reviews={course.reviews}
              price={course.price}
              oldPrice={course.oldPrice}
              id={course.id}
            />
          ))}
        </div>

        <div className="w-[30%] z-0 -left-10 bottom-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -left-10 bottom-36 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[30%] z-0 -right-10 top-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -right-10 top-40 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[60%] z-0 -right-10 top-36 absolute h-12 bg-[#FF006B] transform -rotate-6" />
      </div>

      {/* based on interest */}

      <div className="my-5 px-32">
        <h1 className="text-3xl font-bold mb-2">Trending Courses</h1>
        <h3 className="text-lg text-gray-600">
          We know the best things for You. Top picks for You.
        </h3>
      </div>

      <div className=" relative min-h-[70vh]  justify-center flex ">
        <div className="flex w-[50%] absolute z-10 space-x-8 py-10  justify-between">
          {courseData.map((course, index) => (
            <CourseCard
              image={course.image}
              subtitle={course.subtitle}
              title={course.title}
              rating={course.rating}
              reviews={course.reviews}
              price={course.price}
              oldPrice={course.oldPrice}
              id={course.id}
            />
          ))}
        </div>

        <div className="w-[30%] z-0 -left-10 bottom-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -left-10 bottom-36 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[30%] z-0 -right-10 top-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -right-10 top-40 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[60%] z-0 -right-10 top-36 absolute h-12 bg-[#FF006B] transform -rotate-6" />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
