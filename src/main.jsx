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
import { Toaster } from "@/components/ui/toaster";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import GeneralRoutes from "./utils/GeneralRoutes";
import LoadingPage from "./components/Loading_Pages/Loading_Page";
import AllMissedClasses from "./pages/StudentDashboard/AllMissedClasses";
import Videos from "./pages/StudentDashboard/Videos";
import YourCourses from "./pages/StudentDashboard/YourCourses";
import YourBatch from "./pages/StudentDashboard/YourBatch";
import HelpAndSupport from "./pages/StudentDashboard/HelpAndSupport";
import SettingsPage from "./pages/StudentDashboard/StudentsSettings";
import CertificatesPage from "./pages/StudentDashboard/Certificates";
import AnalyticsPage from "./pages/StudentDashboard/AnalyticsPage";
import InternshipsPage from "./pages/StudentDashboard/InternshipsPage";
import JobsPage from "./pages/StudentDashboard/JobsPage";
import TeacherDashboard from "./pages/TeacherDashBoard/TeacherDashboard";
import ProtectedTeacherRoute from "./utils/ProtectedTeacherRoute";
import ScheduleClass from "./pages/TeacherDashBoard/ScheduleClass";
import { ClassProvider } from "./components/TeachersComponents/ScheduleClass/ClassContext";
import ManageCourse from "./pages/TeacherDashBoard/ManageCourse";
import CreateCourse from "./pages/TeacherDashBoard/CreateCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GeneralRoutes>
        <Home />
      </GeneralRoutes>
    ),
  },
  {
    path: "/services",
    element: (
      <GeneralRoutes>
        <Services />
      </GeneralRoutes>
    ),
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
    path: "/video-class",
    element: <VideoClass />,
  },
  {
    path: "/student/dashboard",
    element: (
      <ProtectedRoute>
        <StudentDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/dashboard/all-missed-classes",
    element: (
      <ProtectedRoute>
        <AllMissedClasses />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/videos/:id",
    element: (
      <ProtectedRoute>
        <Videos />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/courses",
    element: (
      <ProtectedRoute>
        <YourCourses />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/batches",
    element: (
      <ProtectedRoute>
        <YourBatch />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/support",
    element: (
      <ProtectedRoute>
        <HelpAndSupport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/settings",
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/certificates",
    element: (
      <ProtectedRoute>
        <CertificatesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/analytics",
    element: (
      <ProtectedRoute>
        <AnalyticsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/internships",
    element: (
      <ProtectedRoute>
        <InternshipsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student/jobs",
    element: (
      <ProtectedRoute>
        <JobsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/teacher/dashboard",
    element: (
      <ProtectedTeacherRoute>
        <TeacherDashboard />
      </ProtectedTeacherRoute>
    ),
  },
  {
    path: "/teacher/schedule",
    element: (
      <ProtectedTeacherRoute>
        <ClassProvider>
          <ScheduleClass />
        </ClassProvider>
      </ProtectedTeacherRoute>
    ),
  },
  {
    path: "/teacher/manage-courses",
    element: (
      <ProtectedTeacherRoute>
        <ManageCourse />
      </ProtectedTeacherRoute>
    ),
  },
  {
    path: "/teacher/create-course",
    element: (
      <ProtectedTeacherRoute>
        <CreateCourse />
      </ProtectedTeacherRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
