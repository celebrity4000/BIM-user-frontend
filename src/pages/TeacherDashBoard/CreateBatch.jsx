import React from "react";
import Layout from "./Layout";
import DynamicBreadcrumb from "@/components/TeachersComponents/Breadcrumbs/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const breadcrumbItems = [
  {
    label: "Manage Batch",
    href: "/teacher/manage-batch",
  },
];

// Sample data - replace with your actual data
const trainers = [
  { id: "1", name: "Trainer 1" },
  { id: "2", name: "Trainer 2" },
  { id: "3", name: "Trainer 3" },
];

const courses = [
  { id: "1", title: "Course 1" },
  { id: "2", title: "Course 2" },
  { id: "3", title: "Course 3" },
];

function CreateBatch() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Get multiple values from select elements
    const selectedTrainers = Array.from(e.target.trainers.selectedOptions).map(
      (option) => option.value
    );
    const selectedCourses = Array.from(e.target.courses.selectedOptions).map(
      (option) => option.value
    );

    const data = {
      ...Object.fromEntries(formData),
      trainers: selectedTrainers,
      courses: selectedCourses,
    };

    console.log(data);
  };

  return (
    <Layout>
      <div className="mb-3">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>

      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-pink-600">
            Create New Batch
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="batchName">Batch Name</Label>
              <Input
                id="batchName"
                name="batchName"
                required
                className="border-pink-600 focus:ring-pink-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="datetime-local"
                  required
                  className="border-pink-600 focus:ring-pink-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="datetime-local"
                  required
                  className="border-pink-600 focus:ring-pink-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="trainers">Select Trainers</Label>
              <select
                id="trainers"
                name="trainers"
                multiple
                required
                className="w-full p-2 border rounded-md border-pink-600 focus:ring-pink-600 focus:border-pink-600 bg-white min-h-[100px]"
              >
                {trainers.map((trainer) => (
                  <option key={trainer.id} value={trainer.id}>
                    {trainer.name}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500">
                Hold Ctrl/Cmd to select multiple trainers
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="courses">Select Courses</Label>
              <select
                id="courses"
                name="courses"
                multiple
                required
                className="w-full p-2 border rounded-md border-pink-600 focus:ring-pink-600 focus:border-pink-600 bg-white min-h-[100px]"
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500">
                Hold Ctrl/Cmd to select multiple courses
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
            >
              Create Batch
            </Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
}

export default CreateBatch;
