import React from "react";
import { useForm } from "react-hook-form";
import {
  Trash2,
  User,
  MapPin,
  Mail,
  Phone,
  Building,
  Hash,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";

// Dummy student data
const studentData = {
  personalInfo: {
    fullName: "Sarah Johnson",
    email: "sarah.johnson@student.edu",
    phone: "(555) 123-4567",
    address: "789 College Avenue",
    city: "Boston",
    state: "Massachusetts",
    postalCode: "02108",
    studentId: "STU20240389",
    dateJoined: "2023-09-15",
    program: "Computer Science",
    semester: "Spring 2024",
  },
  academicInfo: {
    gpa: "3.8",
    creditsCompleted: "45",
    enrollmentStatus: "Full-time",
    academicStanding: "Good Standing",
    advisor: "Dr. Emily Wilson",
  },
  purchaseHistory: {
    totalCourses: 8,
    totalSpent: "$2,450",
    lastPurchase: "2024-03-15",
    activeSubscriptions: ["Premium Study Materials", "Lab Access Pass"],
  },
};
const breadcrumbItems = [
  {
    label: "Settings",
    href: "/student/settings",
  },
];

const SettingsPage = () => {
  const router = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: studentData.personalInfo.fullName,
      email: studentData.personalInfo.email,
      phone: studentData.personalInfo.phone,
      address: studentData.personalInfo.address,
      city: studentData.personalInfo.city,
      state: studentData.personalInfo.state,
      postalCode: studentData.personalInfo.postalCode,
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted with:", data);
    // Handle form submission
  };

  const handleDeleteAccount = () => {
    console.log("Deleting account for:", studentData.personalInfo.studentId);
    router.push("/delete-account");
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="min-h-screen bg-pink-50 p-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <Card className="max-w-2xl mt-2 mx-auto border-pink-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-pink-900">
                Account Settings
              </CardTitle>
              <CardDescription className="text-pink-700">
                Student ID: {studentData.personalInfo.studentId} | Program:{" "}
                {studentData.personalInfo.program}
              </CardDescription>
            </CardHeader>

            <CardContent className="mt-6">
              {/* Academic Info Summary */}
              <div className="mb-6 p-4 bg-pink-50 rounded-lg">
                <h3 className="text-pink-900 font-semibold mb-2">
                  Academic Status
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-pink-600">Enrollment:</span>{" "}
                    <span className="text-pink-900">
                      {studentData.academicInfo.enrollmentStatus}
                    </span>
                  </div>
                  <div>
                    <span className="text-pink-600">GPA:</span>{" "}
                    <span className="text-pink-900">
                      {studentData.academicInfo.gpa}
                    </span>
                  </div>
                  <div>
                    <span className="text-pink-600">Credits:</span>{" "}
                    <span className="text-pink-900">
                      {studentData.academicInfo.creditsCompleted}
                    </span>
                  </div>
                  <div>
                    <span className="text-pink-600">Standing:</span>{" "}
                    <span className="text-pink-900">
                      {studentData.academicInfo.academicStanding}
                    </span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-pink-900">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-pink-500" />
                    <Input
                      {...register("fullName", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      className="pl-9 border-pink-200 focus:ring-pink-500"
                    />
                  </div>
                  {errors.fullName && (
                    <span className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-pink-900">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-pink-500" />
                      <Input
                        {...register("email")}
                        disabled
                        type="email"
                        className="pl-9 border-pink-200 focus:ring-pink-500"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-pink-900">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-pink-500" />
                      <Input
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        className="pl-9 border-pink-200 focus:ring-pink-500"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-pink-900">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-pink-500" />
                    <Input
                      {...register("address", {
                        required: "Address is required",
                      })}
                      className="pl-9 border-pink-200 focus:ring-pink-500"
                    />
                  </div>
                  {errors.address && (
                    <span className="text-red-500 text-sm">
                      {errors.address.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-pink-900">
                      City
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-pink-500" />
                      <Input
                        {...register("city", { required: "City is required" })}
                        className="pl-9 border-pink-200 focus:ring-pink-500"
                      />
                    </div>
                    {errors.city && (
                      <span className="text-red-500 text-sm">
                        {errors.city.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-pink-900">
                      State
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-pink-500" />
                      <Input
                        {...register("state", {
                          required: "State is required",
                        })}
                        className="pl-9 border-pink-200 focus:ring-pink-500"
                      />
                    </div>
                    {errors.state && (
                      <span className="text-red-500 text-sm">
                        {errors.state.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-pink-900">
                      Postal Code
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-3 h-4 w-4 text-pink-500" />
                      <Input
                        {...register("postalCode", {
                          required: "Postal code is required",
                        })}
                        className="pl-9 border-pink-200 focus:ring-pink-500"
                      />
                    </div>
                    {errors.postalCode && (
                      <span className="text-red-500 text-sm">
                        {errors.postalCode.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Purchase History Summary */}
                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <h3 className="text-pink-900 font-semibold mb-2">
                    Purchase Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-pink-600">Total Courses:</span>{" "}
                      <span className="text-pink-900">
                        {studentData.purchaseHistory.totalCourses}
                      </span>
                    </div>
                    <div>
                      <span className="text-pink-600">Total Spent:</span>{" "}
                      <span className="text-pink-900">
                        {studentData.purchaseHistory.totalSpent}
                      </span>
                    </div>
                    <div>
                      <span className="text-pink-600">Last Purchase:</span>{" "}
                      <span className="text-pink-900">
                        {studentData.purchaseHistory.lastPurchase}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white"
                  >
                    Save Changes
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        type="button"
                        variant="destructive"
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Account
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="border-pink-200">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-pink-900">
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-pink-700">
                          This action cannot be undone. You will lose access to:
                          <ul className="list-disc list-inside mt-2">
                            <li>
                              All your purchased courses (
                              {studentData.purchaseHistory.totalCourses}{" "}
                              courses)
                            </li>
                            <li>Course progress and certificates</li>
                            <li>
                              Total purchase history (
                              {studentData.purchaseHistory.totalSpent})
                            </li>
                            <li>Academic records and submissions</li>
                          </ul>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="border-pink-200">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDeleteAccount}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Yes, delete my account
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
