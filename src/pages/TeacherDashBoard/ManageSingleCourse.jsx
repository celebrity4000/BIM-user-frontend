import React, { useState } from "react";
import Layout from "./Layout";
import DynamicBreadcrumb from "@/components/TeachersComponents/Breadcrumbs/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileUp, Plus, Trash2, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const breadcrumbItems = [
  {
    label: "Manage Courses",
    href: "/teacher/manage-courses",
  },
  {
    label: "Course",
    href: "/teacher/manage-course",
  },
];

function ManageSingleCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState({
    title: "Introduction to Computer Science",
    description:
      "A comprehensive introduction to computer science fundamentals",
    duration: "16 weeks",
    status: "Active",
  });

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Active",
    file: null,
  });

  const [assignments, setAssignments] = useState([
    {
      title: "Data Structures Implementation",
      description: "Implement basic data structures in Python",
      dueDate: "2024-12-01",
      status: "Active",
      file: null,
      currentFile: "dummy.pdf",
    },
    {
      title: "Algorithm Analysis",
      description: "Analyze time complexity of common algorithms",
      dueDate: "2024-12-15",
      status: "Active",
      file: null,
      currentFile: "dummy.pdf",
    },
  ]);

  const [feedbacks] = useState([
    {
      name: "John Smith",
      feedback:
        "Excellent course structure and content. The assignments were challenging yet manageable.",
      date: "2024-10-15",
    },
    {
      name: "Emma Wilson",
      feedback:
        "Very helpful assignments and clear explanations. The course material was well organized.",
      date: "2024-10-20",
    },
    {
      name: "Michael Brown",
      feedback:
        "The practical examples really helped in understanding the concepts better.",
      date: "2024-10-25",
    },
  ]);

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNewAssignmentChange = (field, value) => {
    setNewAssignment((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddAssignment = () => {
    if (newAssignment.title && newAssignment.dueDate) {
      setAssignments((prev) => [
        ...prev,
        { ...newAssignment, currentFile: null },
      ]);
      setNewAssignment({
        title: "",
        description: "",
        dueDate: "",
        status: "Active",
        file: null,
      });
      setIsModalOpen(false);
    }
  };

  const handleAssignmentChange = (index, field, value) => {
    const newAssignments = [...assignments];
    newAssignments[index][field] = value;
    setAssignments(newAssignments);
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      handleAssignmentChange(index, "file", file);
    } else {
      alert("Please upload a PDF file");
    }
  };

  const handleNewAssignmentFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      handleNewAssignmentChange("file", file);
    } else {
      alert("Please upload a PDF file");
    }
  };

  const removeAssignment = (index) => {
    setAssignments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Layout>
      <div className="mb-3">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>

      <div className="p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-6">
            {/* Course Details Card */}
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Course Title
                  </label>
                  <Input
                    name="title"
                    value={courseData.title}
                    onChange={handleCourseChange}
                    placeholder="Enter course title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Description
                  </label>
                  <Textarea
                    name="description"
                    value={courseData.description}
                    onChange={handleCourseChange}
                    placeholder="Enter course description"
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Duration
                    </label>
                    <Input
                      name="duration"
                      value={courseData.duration}
                      onChange={handleCourseChange}
                      placeholder="Enter course duration"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={courseData.status}
                      onChange={handleCourseChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="button" style={{ backgroundColor: "#FF006B" }}>
                    Save Course Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Assignments Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Assignments</CardTitle>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2"
                  variant="outline"
                >
                  <Plus size={16} /> Add Assignment
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {assignments.map((assignment, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => removeAssignment(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <Input
                        value={assignment.title}
                        onChange={(e) =>
                          handleAssignmentChange(index, "title", e.target.value)
                        }
                        placeholder="Assignment title"
                      />
                      <Textarea
                        value={assignment.description}
                        onChange={(e) =>
                          handleAssignmentChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        placeholder="Assignment description"
                        rows={3}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Due Date
                          </label>
                          <Input
                            type="date"
                            value={assignment.dueDate}
                            onChange={(e) =>
                              handleAssignmentChange(
                                index,
                                "dueDate",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Status
                          </label>
                          <select
                            value={assignment.status}
                            onChange={(e) =>
                              handleAssignmentChange(
                                index,
                                "status",
                                e.target.value
                              )
                            }
                            className="w-full p-2 border rounded-md"
                          >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Draft">Draft</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Assignment PDF
                        </label>
                        <div className="flex items-center gap-4">
                          {assignment.currentFile && (
                            <span className="text-sm text-gray-500">
                              Current: {assignment.currentFile}
                            </span>
                          )}
                          <Button
                            type="button"
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() =>
                              document.getElementById(`file-${index}`).click()
                            }
                          >
                            <FileUp size={16} />
                            Upload PDF
                          </Button>
                          <input
                            id={`file-${index}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(index, e)}
                            className="hidden"
                          />
                          {assignment.file && (
                            <span className="text-sm text-gray-500">
                              New: {assignment.file.name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end gap-4 mt-6">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="button" style={{ backgroundColor: "#FF006B" }}>
                    Save Assignments
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feedbacks Section */}
          <div className="lg:w-1/3">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Student Feedbacks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 max-h-[800px] overflow-y-auto">
                {feedbacks.map((feedback, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800">
                        {feedback.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {feedback.date}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{feedback.feedback}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Add Assignment Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Assignment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Assignment Title
              </label>
              <Input
                value={newAssignment.title}
                onChange={(e) =>
                  handleNewAssignmentChange("title", e.target.value)
                }
                placeholder="Enter assignment title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <Textarea
                value={newAssignment.description}
                onChange={(e) =>
                  handleNewAssignmentChange("description", e.target.value)
                }
                placeholder="Enter assignment description"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Due Date
                </label>
                <Input
                  type="date"
                  value={newAssignment.dueDate}
                  onChange={(e) =>
                    handleNewAssignmentChange("dueDate", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  value={newAssignment.status}
                  onChange={(e) =>
                    handleNewAssignmentChange("status", e.target.value)
                  }
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Assignment PDF
              </label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    document.getElementById("new-assignment-file").click()
                  }
                >
                  <FileUp size={16} />
                  Upload PDF
                </Button>
                <input
                  id="new-assignment-file"
                  type="file"
                  accept=".pdf"
                  onChange={handleNewAssignmentFile}
                  className="hidden"
                />
                {newAssignment.file && (
                  <span className="text-sm text-gray-500">
                    Selected: {newAssignment.file.name}
                  </span>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleAddAssignment}
              style={{ backgroundColor: "#FF006B" }}
            >
              Add Assignment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

export default ManageSingleCourse;
