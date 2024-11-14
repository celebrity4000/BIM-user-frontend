import React from "react";
import Layout from "./Layout";
import DynamicBreadcrumb from "@/components/TeachersComponents/Breadcrumbs/Breadcrumb";
import { Users, Calendar, ArrowRight } from "lucide-react";

const breadcrumbItems = [
  {
    label: "Manage Course ",
    href: "/teacher/manage-course",
  },
];

const coursesYouTeaching = [
  {
    id: 1,
    courseName: "BIM 1",
    courseCode: "BIM 101",
    enrolledStudents: 30,
    courseEndDate: "2022-12-12",
    couresePage: "/teacher/manage-course/BIM1",
    courseImage:
      "https://www.i2comply.com/wp-content/uploads/2024/03/Construction_Online_Courses.webp",
  },
  {
    id: 2,
    courseName: "BIM 2",
    courseCode: "BIM 102",
    enrolledStudents: 25,
    courseEndDate: "2022-12-12",
    couresePage: "/teacher/manage-course/BIM2",
    courseImage:
      "https://www.i2comply.com/wp-content/uploads/2024/03/Construction_Online_Courses.webp",
  },
  {
    id: 3,
    courseName: "BIM 3",
    courseCode: "BIM 103",
    enrolledStudents: 20,
    courseEndDate: "2022-12-12",
    couresePage: "/teacher/manage-course/BIM3",
    courseImage:
      "https://www.i2comply.com/wp-content/uploads/2024/03/Construction_Online_Courses.webp",
  },
  {
    id: 4,
    courseName: "BIM 4",
    courseCode: "BIM 104",
    enrolledStudents: 15,
    courseEndDate: "2022-12-12",
    couresePage: "/teacher/manage-course/BIM4",
    courseImage:
      "https://www.i2comply.com/wp-content/uploads/2024/03/Construction_Online_Courses.webp",
  },
  {
    id: 5,
    courseName: "BIM 5",
    courseCode: "BIM 105",
    enrolledStudents: 10,
    courseEndDate: "2022-12-12",
    couresePage: "/teacher/manage-course/BIM5",
    courseImage:
      "https://www.i2comply.com/wp-content/uploads/2024/03/Construction_Online_Courses.webp",
  },
];

function ManageCourse() {
  return (
    <Layout>
      <div className="mb-3">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8 text-[#FF006B]">
          Courses You Teaching
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesYouTeaching.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF006B] to-transparent opacity-30" />
                <img
                  src={course.courseImage}
                  alt={course.courseName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {course.courseName}
                  </h3>
                  <p className="text-sm text-[#D4005A]">{course.courseCode}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-2 text-[#FF006B]" />
                    <span>{course.enrolledStudents} Students Enrolled</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2 text-[#FF006B]" />
                    <span>
                      Ends {new Date(course.courseEndDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <a
                  href={course.couresePage}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#FF006B] hover:bg-[#D4005A] text-white rounded-md transition-colors duration-300"
                >
                  View Course
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ManageCourse;
