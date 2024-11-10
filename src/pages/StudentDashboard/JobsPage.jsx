import React from "react";
import {
  Lock,
  Briefcase,
  Clock,
  MapPin,
  Building,
  ArrowUpRight,
  Trophy,
  DollarSign,
  Rocket,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";

const breadcrumbItems = [
  {
    label: "Jobs",
    href: "/student/jobs",
  },
];
// Mock student profile data
const studentProfile = {
  skills: {
    technical: ["AutoCAD", "Revit", "SAP2000", "ETABS", "Microsoft Excel"],
    professional: ["Construction Management", "Site Supervision"],
    tools: ["Total Station", "GIS Software", "MS Project"],
    experience: "1 year",
    certificates: ["EIT (Engineer in Training)", "OSHA Safety Certification"],
  },
};

// Mock jobs data
const jobsData = {
  recommended: [
    {
      id: 1,
      title: "Junior Civil Engineer",
      company: "BuildTech Construction",
      location: "Remote, USA",
      type: "Full-time",
      salary: "$60,000 - $80,000/year",
      postedDate: "2024-03-15",
      experience: "0-2 years",
      requiredSkills: ["AutoCAD", "Revit", "MS Excel", "Construction Drawing"],
      matchingSkills: ["AutoCAD", "Revit", "MS Excel", "Construction Drawing"],
      benefits: [
        "Health Insurance",
        "401(k)",
        "Field Equipment Provided",
        "Professional Development",
      ],
      description:
        "Join our dynamic team working on residential and commercial construction projects...",
      applicationDeadline: "2024-04-15",
    },
    {
      id: 2,
      title: "Site Engineer",
      company: "Infrastructure Solutions Co.",
      location: "Hybrid, New York",
      type: "Full-time",
      salary: "$65,000 - $85,000/year",
      postedDate: "2024-03-18",
      experience: "1-3 years",
      requiredSkills: ["AutoCAD", "Site Supervision", "GIS", "Quality Control"],
      matchingSkills: ["AutoCAD", "Site Supervision", "GIS"],
      benefits: [
        "Flexible Hours",
        "Health Benefits",
        "Vehicle Allowance",
        "Certification Support",
      ],
      description:
        "Oversee construction projects and ensure quality standards...",
      applicationDeadline: "2024-04-20",
    },
  ],
  locked: [
    {
      id: 3,
      title: "Structural Engineer",
      company: "Engineering Consultants",
      location: "On-site, San Francisco",
      type: "Full-time",
      salary: "$90,000 - $115,000/year",
      postedDate: "2024-03-20",
      experience: "2-4 years",
      requiredSkills: [
        "ETABS",
        "SAP2000",
        "Structural Design",
        "Steel Design",
        "Seismic Analysis",
      ],
      missingSkills: [
        "ETABS",
        "Structural Design",
        "Steel Design",
        "Seismic Analysis",
      ],
      benefits: [
        "Competitive Salary",
        "Health & Dental",
        "Professional License Support",
        "Annual Bonus",
      ],
      description: "Design structural systems for commercial buildings...",
    },
    {
      id: 4,
      title: "Senior Civil Engineer",
      company: "Infrastructure Innovators",
      location: "Remote, USA",
      type: "Full-time",
      salary: "$120,000 - $150,000/year",
      postedDate: "2024-03-17",
      experience: "4+ years",
      requiredSkills: [
        "Project Management",
        "Bridge Design",
        "Highway Design",
        "Construction Management",
        "Contract Administration",
      ],
      missingSkills: [
        "Bridge Design",
        "Highway Design",
        "Contract Administration",
      ],
      benefits: [
        "Unlimited PTO",
        "Remote Work",
        "PE License Support",
        "Premium Healthcare",
      ],
      description:
        "Lead infrastructure development projects and mentor junior engineers...",
    },
  ],
};

const JobsPage = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="min-h-screen bg-pink-50 p-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-pink-900">
                Job Opportunities
              </h1>
              <p className="text-pink-600 mt-2">
                Find full-time positions matching your skills and career goals
              </p>
            </div>

            {/* Professional Profile Section */}
            <Card className="mb-8 border-pink-200">
              <CardHeader>
                <CardTitle className="text-pink-900">
                  Professional Profile
                </CardTitle>
                <CardDescription className="text-pink-600">
                  Your qualifications and expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-pink-900 mb-2">
                      Technical Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {studentProfile.skills.technical.map((skill) => (
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
                      Professional Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {studentProfile.skills.professional.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-pink-100 text-pink-700 hover:bg-pink-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6 text-sm text-pink-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Experience: {studentProfile.skills.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      {studentProfile.skills.certificates.length} Certificates
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Jobs Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <Rocket className="h-6 w-6 text-pink-600" />
                Recommended Jobs
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobsData.recommended.map((job) => (
                  <Card
                    key={job.id}
                    className="border-pink-200 hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-pink-900">
                            {job.title}
                          </CardTitle>
                          <CardDescription className="text-pink-700">
                            {job.company}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-green-500 text-green-600"
                        >
                          {job.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 text-sm text-pink-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {job.experience}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-pink-900 mb-2">
                            Required Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {job.requiredSkills.map((skill) => (
                              <Badge
                                key={skill}
                                className="bg-pink-100 text-pink-700"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-pink-900 mb-2">
                            Benefits
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, index) => (
                              <span
                                key={index}
                                className="text-xs text-pink-600 bg-pink-50 px-2 py-1 rounded-full"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                          <span className="text-sm text-pink-600">
                            Posted:{" "}
                            {new Date(job.postedDate).toLocaleDateString()}
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

            {/* Locked Jobs Section */}
            <div>
              <h2 className="text-2xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-pink-600" />
                Career Growth Opportunities
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobsData.locked.map((job) => (
                  <Card
                    key={job.id}
                    className="border-pink-200 hover:shadow-lg transition-shadow relative overflow-hidden"
                  >
                    {/* Locked Overlay */}
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-blur-[2px] z-10 flex items-center justify-center">
                      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                        <Lock className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                        <h3 className="text-pink-900 font-medium mb-4">
                          Advance Your Career
                        </h3>
                        <p className="text-pink-600 mb-4">
                          Gain these skills to unlock this opportunity:
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {job.missingSkills.map((skill) => (
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
                          className="border-pink-200 text-pink-600 hover:bg-pink-50"
                          onClick={() => {
                            // Navigate to learning path
                          }}
                        >
                          View Learning Path
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-pink-900">
                            {job.title}
                          </CardTitle>
                          <CardDescription className="text-pink-700">
                            {job.company}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-pink-200 text-pink-600"
                        >
                          {job.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 text-sm text-pink-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {job.experience}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-pink-900 mb-2">
                            Required Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {job.requiredSkills.map((skill) => (
                              <Badge
                                key={skill}
                                className="bg-pink-100 text-pink-700"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-pink-900 mb-2">
                            Benefits
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, index) => (
                              <span
                                key={index}
                                className="text-xs text-pink-600 bg-pink-50 px-2 py-1 rounded-full"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                          <span className="text-sm text-pink-600">
                            Posted:{" "}
                            {new Date(job.postedDate).toLocaleDateString()}
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

export default JobsPage;
