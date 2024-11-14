import React, { useState } from "react";
import Layout from "./Layout";
import DynamicBreadcrumb from "@/components/TeachersComponents/Breadcrumbs/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const breadcrumbItems = [
  {
    label: "Manage Course",
    href: "/teacher/manage-course",
  },
];

const teachers = [
  { id: "1", name: "Teacher 1" },
  { id: "2", name: "Teacher 2" },
  { id: "3", name: "Teacher 3" },
];

function CreateCourse() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Get multiple values for teachers
    const selectedTeachers = Array.from(e.target.teachers.selectedOptions).map(
      (option) => option.value
    );

    const data = {
      title: formData.get("title"),
      price: formData.get("price"),
      offerPrice: formData.get("offerPrice"),
      description: formData.get("description"),
      imageUrl: formData.get("imageUrl"),
      teachers: selectedTeachers,
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
            Create New Course
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                name="title"
                required
                className="border-pink-600 focus:ring-pink-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  required
                  className="border-pink-600 focus:ring-pink-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="offerPrice">Offer Price</Label>
                <Input
                  id="offerPrice"
                  name="offerPrice"
                  type="number"
                  className="border-pink-600 focus:ring-pink-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                required
                className="min-h-[100px] border-pink-600 focus:ring-pink-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Course Image</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="file"
                accept="image/*"
                required
                onChange={handleImageChange}
                className="border-pink-600 focus:ring-pink-600"
              />
              {imagePreview && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Course preview"
                    className="w-full max-w-md h-48 object-cover rounded-md"
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="teachers">Select Teachers</Label>
              <select
                id="teachers"
                name="teachers"
                multiple
                required
                className="w-full p-2 border rounded-md border-pink-600 focus:ring-pink-600 focus:border-pink-600 bg-white min-h-[120px]"
              >
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500">
                Hold Ctrl/Cmd to select multiple teachers
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
            >
              Create Course
            </Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
}

export default CreateCourse;
