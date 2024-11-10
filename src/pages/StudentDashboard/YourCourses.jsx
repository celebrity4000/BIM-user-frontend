import React from "react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";
import { Calendar, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const YourCourses = () => {
  const breadcrumbItems = [
    {
      label: "Courses",
      href: "/student/courses",
    },
  ];

  const yourCourses = [
    {
      id: 1,
      courseTitle: "Course Title 1",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/1",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      progress: 50,
    },
    {
      id: 2,
      courseTitle: "Course Title 2",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/2",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      progress: 75,
    },
    {
      id: 3,
      courseTitle: "Course Title 3",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/3",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      progress: 90,
    },
    {
      id: 4,
      courseTitle: "Course Title 4",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/4",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      progress: 80,
    },
    {
      id: 5,
      courseTitle: "Course Title 5",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/5",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      progress: 20,
    },
    {
      id: 6,
      courseTitle: "Course Title 6",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/6",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      progress: 10,
    },
  ];

  const similarCourses = [
    {
      id: 1,
      courseTitle: "Course Title 1",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/1",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      coursePrice: "$20",
      startingDate: "12/12/2021",
      enrolledStudents: 100,
      duration: "3 months",
      instractor: "John Doe",
      instrucrorImage:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      courseTitle: "Course Title 2",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/2",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      coursePrice: "$20",
      startingDate: "12/12/2021",
      enrolledStudents: 100,
      duration: "3 months",
      instractor: "John Doe",
      instrucrorImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnE_fy9lLMRP5DLYLnGN0LRLzZOiEpMrU4g&s",
    },
    {
      id: 3,
      courseTitle: "Course Title 3",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/3",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      coursePrice: "$20",
      startingDate: "12/12/2021",
      enrolledStudents: 100,
      duration: "3 months",
      instractor: "John Doe",
      instrucrorImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnE_fy9lLMRP5DLYLnGN0LRLzZOiEpMrU4g&s",
    },
    {
      id: 4,
      courseTitle: "Course Title 4",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/4",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      coursePrice: "$20",
      startingDate: "12/12/2021",
      enrolledStudents: 100,
      duration: "3 months",
      instractor: "John Doe",
      instrucrorImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnE_fy9lLMRP5DLYLnGN0LRLzZOiEpMrU4g&s",
    },
    {
      id: 5,
      courseTitle: "Course Title 5",
      courseDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi porro dolores eveniet eos perspiciatis atque minima dolore dicta vero.",
      courseLink: "/student/courses/5",
      courseLogo: "https://img-b.udemycdn.com/course/240x135/100536_4997_4.jpg",
      coursePrice: "$20",
      startingDate: "12/12/2021",
      enrolledStudents: 100,
      duration: "3 months",
      instractor: "John Doe",
      instrucrorImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnE_fy9lLMRP5DLYLnGN0LRLzZOiEpMrU4g&s",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="flex-1 p-8 max-h-screen bg-gradient-to-br from-pink-50 to-pink-100 overflow-y-scroll">
          <DynamicBreadcrumb items={breadcrumbItems} />
          {/* Your Courses Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#FF006B]">
                Your Courses
              </h2>
              <button className="text-[#FF006B] hover:text-pink-700">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yourCourses.map((course) => {
                return (
                  <Link key={course.id} to={course.courseLink}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                          src={course.courseLogo}
                          alt={course.courseTitle}
                          className="w-full h-48 object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-[#FF006B]">
                            In Progress
                          </span>
                          <div className="flex items-center text-yellow-400">
                            <Star size={14} fill="currentColor" />
                            <span className="ml-1 text-xs text-gray-600">
                              4.8
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-[#FF006B] transition-colors line-clamp-1">
                          {course.courseTitle}
                        </h3>

                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {course.courseDescription}
                        </p>

                        <div className="relative pt-2 mb-4">
                          <div className="w-full h-1.5 bg-gray-100 rounded-full">
                            <div
                              className="h-full bg-gradient-to-r from-[#FF006B] to-pink-400 rounded-full transition-all duration-300"
                              style={{ width: `${course?.progress}%` }}
                            />
                          </div>
                          <span className="absolute right-0 -top-4 text-xs text-gray-500">
                            {course?.progress}%
                          </span>
                        </div>

                        <button className="w-full px-4 py-2 bg-gradient-to-r from-[#FF006B] to-pink-500 text-white rounded-lg hover:from-pink-600 hover:to-pink-600 transition-colors">
                          Continue Learning
                        </button>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Similar Courses Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#FF006B]">
                Similar Courses
              </h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-[#FF006B] text-white hover:bg-pink-700">
                  Browse All
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarCourses.map((course) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
                >
                  <div className="relative">
                    <img
                      src={course.courseLogo}
                      alt={course.courseTitle}
                      className="w-full h-48 object-cover p-3 rounded-md"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-white text-[#FF006B]">
                      {course.coursePrice}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF006B] to-pink-500">
                          <img
                            src={course?.instrucrorImage}
                            alt={course.instractor}
                            className="p-1 w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {course.instractor}
                        </span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star size={14} fill="currentColor" />
                        <span className="ml-1 text-xs text-gray-600">4.9</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-[#FF006B] transition-colors line-clamp-1">
                      {course.courseTitle}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {course.courseDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users size={14} className="mr-2" />
                        {course.enrolledStudents} Students
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 col-span-2">
                        <Calendar size={14} className="mr-2" />
                        Starts {course.startingDate}
                      </div>
                    </div>

                    <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#FF006B] to-pink-500 text-white rounded-lg hover:from-pink-600 hover:to-pink-600 transition-colors font-medium">
                      Enroll Now
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCourses;
