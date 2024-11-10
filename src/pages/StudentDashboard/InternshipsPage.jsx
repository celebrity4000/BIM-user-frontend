import React from "react";
import {
  Lock,
  Clock,
  MapPin,
  Calendar,
  ArrowUpRight,
  Trophy,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";

const breadcrumbItems = [
  {
    label: "Internships",
    href: "/student/internships",
  },
];

// Mock student skills data
const studentSkills = {
  programming: ["AutoCAD", "Revit", "MS Excel", "SketchUp"],
  softSkills: ["Communication", "Teamwork"],
  tools: ["Total Station", "GIS Software"],
  certificates: ["AutoCAD Fundamentals"],
};

// Mock internship data
const internshipsData = {
  recommended: [
    {
      id: 1,
      title: "Civil Engineering Intern",
      company: "BuildCorp Solutions",
      location: "Remote",
      duration: "3 months",
      stipend: "$2000/month",
      deadline: "2024-04-30",
      requiredSkills: ["AutoCAD", "Revit", "MS Excel", "Construction Drawing"],
      description:
        "Assist in residential and commercial construction projects...",
      matchingSkills: ["AutoCAD", "Revit", "MS Excel"],
      applicationStatus: "Apply Now",
    },
    {
      id: 2,
      title: "Site Engineering Intern",
      company: "Construction Innovators",
      location: "Hybrid",
      duration: "6 months",
      stipend: "$2500/month",
      deadline: "2024-04-25",
      requiredSkills: ["AutoCAD", "Site Planning", "Quality Control"],
      description: "Learn and assist in construction site management...",
      matchingSkills: ["AutoCAD", "Site Planning"],
      applicationStatus: "Apply Now",
    },
  ],
  locked: [
    {
      id: 3,
      title: "Structural Engineering Intern",
      company: "Engineering Solutions",
      location: "On-site",
      duration: "6 months",
      stipend: "$3000/month",
      deadline: "2024-05-15",
      requiredSkills: [
        "ETABS",
        "SAP2000",
        "Structural Analysis",
        "Steel Design",
      ],
      missingSkills: ["ETABS", "SAP2000", "Steel Design"],
      description: "Assist in structural design and analysis of buildings...",
    },
    {
      id: 4,
      title: "Transportation Engineering Intern",
      company: "Infrastructure Solutions",
      location: "Remote",
      duration: "4 months",
      stipend: "$2800/month",
      deadline: "2024-05-01",
      requiredSkills: ["Civil 3D", "Traffic Analysis", "Highway Design"],
      missingSkills: ["Civil 3D", "Traffic Analysis", "Highway Design"],
      description: "Work on transportation infrastructure projects...",
    },
  ],
};

const InternshipsPage = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="min-h-screen bg-pink-50 p-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <div className="max-w-7xl my-3 mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-pink-900">Internships</h1>
              <p className="text-pink-600 mt-2">
                Find internships matching your skills and interests
              </p>
            </div>

            {/* Your Skills Section */}
            <Card className="mb-8 border-pink-200">
              <CardHeader>
                <CardTitle className="text-pink-900">Your Skills</CardTitle>
                <CardDescription className="text-pink-600">
                  Skills you've acquired through courses and certifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-pink-900 mb-2">
                      Programming Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {studentSkills.programming.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-pink-100 text-pink-700 hover:bg-pink-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-pink-900 mb-2">
                      Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {studentSkills.tools.map((tool) => (
                        <Badge
                          key={tool}
                          className="bg-pink-100 text-pink-700 hover:bg-pink-200"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Internships Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <Trophy className="h-6 w-6 text-pink-600" />
                Recommended Internships
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internshipsData.recommended.map((internship) => (
                  <Card
                    key={internship.id}
                    className="border-pink-200 hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-pink-900">
                        {internship.title}
                      </CardTitle>
                      <CardDescription className="text-pink-700">
                        {internship.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 text-sm text-pink-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {internship.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {internship.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Due: {internship.deadline}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-pink-900 mb-2">
                            Required Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {internship.requiredSkills.map((skill) => (
                              <Badge
                                key={skill}
                                className="bg-pink-100 text-pink-700"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                          <span className="text-pink-900 font-semibold">
                            {internship.stipend}
                          </span>
                          <Button className="bg-pink-600 hover:bg-pink-700">
                            Apply Now
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Locked Internships Section */}
            <div>
              <h2 className="text-2xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-pink-600" />
                Skill-Locked Internships
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internshipsData.locked.map((internship) => (
                  <Card
                    key={internship.id}
                    className="border-pink-200 hover:shadow-lg transition-shadow relative overflow-hidden"
                  >
                    {/* Locked Overlay */}
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-blur-[2px] z-10 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <Lock className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                        <h3 className="text-pink-900 font-medium mb-2">
                          Skills Required
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {internship.missingSkills.map((skill) => (
                            <Badge
                              key={skill}
                              className="bg-pink-100 text-pink-700"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="mt-4 border-pink-200 text-pink-600 hover:bg-pink-50"
                          onClick={() => {
                            // Navigate to relevant course
                          }}
                        >
                          Learn Required Skills
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-pink-900">
                        {internship.title}
                      </CardTitle>
                      <CardDescription className="text-pink-700">
                        {internship.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 text-sm text-pink-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {internship.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {internship.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Due: {internship.deadline}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-pink-900 mb-2">
                            Required Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {internship.requiredSkills.map((skill) => (
                              <Badge
                                key={skill}
                                className="bg-pink-100 text-pink-700"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                          <span className="text-pink-900 font-semibold">
                            {internship.stipend}
                          </span>
                          <Button
                            disabled
                            className="bg-pink-600 hover:bg-pink-700"
                          >
                            Locked
                            <Lock className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;
