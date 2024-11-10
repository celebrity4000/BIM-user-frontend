import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Download, ExternalLink, Medal } from "lucide-react";
import React from "react";

const breadcrumbItems = [
  {
    label: "Certificates",
    href: "/student/certificates",
  },
];

// Mock certificate data from database
const certificateData = [
  {
    id: "CERT001",
    courseName: "Advanced Structural Design",
    issueDate: "2024-02-15",
    completionDate: "2024-02-10",
    grade: "A",
    instructor: "Dr. James Roberts",
    credentialId: "SD20240215",
    skills: ["ETABS", "SAP2000", "Steel Design", "Concrete Design"],
    validityPeriod: "Lifetime",
  },
  {
    id: "CERT002",
    courseName: "Construction Management Fundamentals",
    issueDate: "2024-01-20",
    completionDate: "2024-01-15",
    grade: "A+",
    instructor: "Prof. Maria Garcia",
    credentialId: "CM20240120",
    skills: [
      "Project Planning",
      "Cost Estimation",
      "Site Management",
      "Quality Control",
    ],
    validityPeriod: "Lifetime",
  },
  {
    id: "CERT003",
    courseName: "Transportation Engineering Principles",
    issueDate: "2023-12-10",
    completionDate: "2023-12-05",
    grade: "A",
    instructor: "Mr. David Chen",
    credentialId: "TE20231210",
    skills: [
      "Highway Design",
      "Traffic Analysis",
      "Civil 3D",
      "Transportation Planning",
    ],
    validityPeriod: "Lifetime",
  },
];

const CertificatesPage = () => {
  const downloadCertificate = (certId) => {
    console.log(`Downloading certificate ${certId}`);
    // Handle certificate download
  };

  const viewCertificate = (certId) => {
    console.log(`Viewing certificate ${certId}`);
    // Handle certificate view in modal
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="min-h-screen bg-pink-50 p-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <div className="max-w-6xl mt-3 mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-pink-900">
                My Certificates
              </h1>
              <p className="text-pink-600 mt-2">
                View and download your earned certificates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificateData.map((cert) => (
                <Card
                  key={cert.id}
                  className="border-pink-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-pink-900 flex items-center gap-2">
                      <Award className="h-5 w-5 text-pink-600" />
                      {cert.courseName}
                    </CardTitle>
                    <CardDescription className="text-pink-600">
                      Issued: {new Date(cert.issueDate).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-pink-600 font-medium">
                            Credential ID:
                          </span>
                          <span className="text-pink-900">
                            {cert.credentialId}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-pink-600 font-medium">
                            Grade:
                          </span>
                          <span className="text-pink-900">{cert.grade}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-pink-600 font-medium">
                            Instructor:
                          </span>
                          <span className="text-pink-900">
                            {cert.instructor}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-pink-900 font-medium mb-2">
                          Skills Earned:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button
                          onClick={() => downloadCertificate(cert.id)}
                          className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button
                          onClick={() => viewCertificate(cert.id)}
                          variant="outline"
                          className="flex-1 border-pink-200 text-pink-600 hover:bg-pink-50"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificate Design Template */}
          <div className="hidden">
            <div
              id="certificate-template"
              className="w-[1000px] h-[700px] bg-white p-16 relative"
            >
              <div className="absolute inset-4 border-4 border-pink-200" />
              <div className="absolute inset-6 border border-pink-100" />

              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <Medal className="h-20 w-20 text-pink-600" />
                </div>

                <div>
                  <h1 className="text-4xl font-serif text-pink-900">
                    Certificate of Completion
                  </h1>
                  <p className="mt-4 text-xl text-pink-600">
                    This certifies that
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-pink-900 border-b-2 border-pink-200 inline-block px-12 pb-2">
                    [Student Name]
                  </h2>
                </div>

                <div className="text-xl text-pink-700">
                  <p>has successfully completed the course</p>
                  <h3 className="text-2xl font-bold text-pink-900 mt-2">
                    [Course Name]
                  </h3>
                  <p className="mt-2">with a grade of [Grade]</p>
                </div>

                <div className="mt-12 flex justify-between items-center px-20">
                  <div className="text-center">
                    <div className="border-t-2 border-pink-200 pt-2">
                      <p className="text-pink-900 font-bold">
                        [Instructor Name]
                      </p>
                      <p className="text-pink-600">Instructor</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="border-t-2 border-pink-200 pt-2">
                      <p className="text-pink-900 font-bold">[Issue Date]</p>
                      <p className="text-pink-600">Date Issued</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="border-t-2 border-pink-200 pt-2">
                      <p className="text-pink-900 font-bold">[Credential ID]</p>
                      <p className="text-pink-600">Certificate ID</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-pink-600 text-sm">
                  Verify this certificate at: verify.example.com/[Certificate
                  ID]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
