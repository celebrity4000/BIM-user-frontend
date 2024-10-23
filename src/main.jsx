import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Course from "./pages/Course.jsx";
import Blogs from "./pages/Blogs.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Payment from "./pages/Payment.jsx";
import Projects from "./pages/Projects.jsx";
import CourseLanding from "./pages/CourseLanding.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import CoursesEnquiry from "./pages/CoursesEnquiry.jsx";
import Quote from "./pages/Quote.jsx";
import VideoClass from "./pages/VideoClass.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/courses",
    element: <CourseLanding />,
  },
  {
    path: "/allcourses",
    element: <Courses />,
  },
  {
    path: "/courses/:id",
    element: <Course />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:id",
    element: <SingleBlog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/enquiry",
    element: <CoursesEnquiry />,
  },
  {
    path: "/quote",
    element: <Quote />,
  },
  {
    path: '/video-class',
    element: <VideoClass />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
