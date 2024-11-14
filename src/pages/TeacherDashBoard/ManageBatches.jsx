import React from "react";
import Layout from "./Layout";
import DynamicBreadcrumb from "@/components/TeachersComponents/Breadcrumbs/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const breadcrumbItems = [
  {
    label: "Manage Batch",
    href: "/teacher/manage-batch",
  },
];

// Sample batch data - replace with your actual data
const batches = [
  {
    id: "1",
    batchName: "Civil Engineering Batch 2024",
    startDate: "2024-03-15T09:00:00",
    endDate: "2024-06-15T17:00:00",
    trainers: ["John Doe", "Jane Smith"],
    courses: ["Structural Analysis", "Geotechnical Engineering", "Hydraulics"],
    totalStudents: 30,
  },
  {
    id: "2",
    batchName: "Architectural Design Batch 2024",
    startDate: "2024-04-01T10:00:00",
    endDate: "2024-07-01T16:00:00",
    trainers: ["Alice Johnson", "Bob Brown"],
    courses: ["Architectural Drawing", "Building Materials", "Design Studio"],
    totalStudents: 25,
  },
];

function ManageBatches() {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <div className="mb-3">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>

      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Manage Batches</h1>
        <Link href="/teacher/manage-batch/create">
          <Button className="bg-pink-600 hover:bg-pink-700">
            Create New Batch
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <Link
            href={`/teacher/manage-batch/${batch.id}`}
            key={batch.id}
            className="block transition-transform hover:scale-[1.02]"
          >
            <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-pink-600">
                  {batch.batchName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarDays className="h-5 w-5" />
                    <div>
                      <div>{formatDate(batch.startDate)}</div>
                      <div>to {formatDate(batch.endDate)}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>{batch.trainers.join(", ")}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen className="h-5 w-5" />
                    <span>{batch.courses.length} Courses</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>{batch.totalStudents} Students</span>
                  </div>

                  <div className="flex items-center justify-end text-pink-600">
                    View Details <ArrowRight className="h-5 w-5 ml-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {batches.length === 0 && (
        <Card className="w-full p-8 text-center">
          <p className="text-gray-500 text-lg">No batches found</p>
          <Link href="/teacher/manage-batch/create">
            <Button className="mt-4 bg-pink-600 hover:bg-pink-700">
              Create Your First Batch
            </Button>
          </Link>
        </Card>
      )}
    </Layout>
  );
}

export default ManageBatches;
