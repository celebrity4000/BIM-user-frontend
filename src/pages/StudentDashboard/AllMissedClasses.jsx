import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import { Star, Clock } from "lucide-react";
import GlowingDot from "@/components/GlowingDot";
import { Link, useNavigate } from "react-router-dom";

function AllMissedClasses() {
  const router = useNavigate();

  const breadcrumbItems = [
    {
      label: "Dashboard",
      href: "/student/dashboard",
    },
    {
      label: "All Missed Classes",
      href: "/student/dashboard/all-missed-classes",
    },
  ];

  const classesMissed = [
    {
      id: 1,
      title: "Class 1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqULMDigqHgWEFHFLq3p5osGj6-I3xI-SRA&s",
      subject: "Maths",
      teacher: "John Doe",
    },
    {
      id: 2,
      title: "Class 2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqULMDigqHgWEFHFLq3p5osGj6-I3xI-SRA&s",
      subject: "Science",
      teacher: "Jane Doe",
    },
    {
      id: 3,
      title: "Class 3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqULMDigqHgWEFHFLq3p5osGj6-I3xI-SRA&s",
      subject: "English",
      teacher: "John Doe",
    },
    {
      id: 4,
      title: "Class 4",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqULMDigqHgWEFHFLq3p5osGj6-I3xI-SRA&s",
      subject: "History",
      teacher: "Jane Doe",
    },
    {
      id: 5,
      title: "Class 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqULMDigqHgWEFHFLq3p5osGj6-I3xI-SRA&s",
      subject: "Geography",
      teacher: "John Doe",
    },
    {
      id: 6,
      title: "Class 6",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqULMDigqHgWEFHFLq3p5osGj6-I3xI-SRA&s",
      subject: "Physics",
      teacher: "Jane Doe",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="flex-1 p-8 max-h-screen overflow-y-scroll">
          <DynamicBreadcrumb items={breadcrumbItems} />

          {/* Missed Classes Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FF006B]">
              Missed Classes
            </h2>
            <span className="text-sm text-gray-600">
              You have missed {classesMissed.length} classes
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {classesMissed.map((class_) => (
                <Card
                  key={class_.id}
                  onClick={() => {
                    router(`/student/videos/${class_.id}`);
                  }}
                  className="border-[#FF006B]/20 hover:border-[#FF006B]/50 transition-colors"
                >
                  <CardHeader>
                    <img
                      src={class_.img}
                      alt={class_.title}
                      className="w-full h-32 object-cover rounded-t"
                    />
                    <CardTitle className="text-[#FF006B]">
                      {class_.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{class_.subject}</p>
                    <p className="text-sm text-gray-600">{class_.teacher}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMissedClasses;
