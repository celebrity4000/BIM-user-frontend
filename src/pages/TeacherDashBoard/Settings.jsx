import React, { useState } from "react";
import Layout from "./Layout";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Sample initial data - replace with actual user data
const initialUserData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  address: "123 Main St, City, Country",
  education: "Bachelor's in Computer Science",
  designation: "Senior Teacher",
  bio: "Experienced educator with a passion for teaching technology.",
  socialLinks: {
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  },
};

function Settings() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialUserData,
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log("Form data:", data);
      // Add your API call here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-pink-600">
            Profile Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="border-pink-600 focus:ring-pink-600"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="border-pink-600 focus:ring-pink-600"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email - Disabled */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                disabled
                className="bg-gray-100 border-gray-300"
              />
              <p className="text-sm text-gray-500">Email cannot be changed</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+]?[0-9]{10,15}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
                className="border-pink-600 focus:ring-pink-600"
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                {...register("address", { required: "Address is required" })}
                className="border-pink-600 focus:ring-pink-600"
              />
              {errors.address && (
                <p className="text-sm text-red-500">{errors.address.message}</p>
              )}
            </div>

            {/* Professional Information */}
            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                {...register("education", {
                  required: "Education is required",
                })}
                className="border-pink-600 focus:ring-pink-600"
              />
              {errors.education && (
                <p className="text-sm text-red-500">
                  {errors.education.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                {...register("designation", {
                  required: "Designation is required",
                })}
                className="border-pink-600 focus:ring-pink-600"
              />
              {errors.designation && (
                <p className="text-sm text-red-500">
                  {errors.designation.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                {...register("bio", {
                  required: "Bio is required",
                  maxLength: {
                    value: 500,
                    message: "Bio should not exceed 500 characters",
                  },
                })}
                className="border-pink-600 focus:ring-pink-600 min-h-[100px]"
              />
              {errors.bio && (
                <p className="text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <Label htmlFor="socialLinks.linkedin">LinkedIn Profile</Label>
              <Input
                id="socialLinks.linkedin"
                {...register("socialLinks.linkedin", {
                  pattern: {
                    value: /^https?:\/\/(www\.)?linkedin\.com/,
                    message: "Please enter a valid LinkedIn URL",
                  },
                })}
                className="border-pink-600 focus:ring-pink-600"
                placeholder="https://linkedin.com/in/username"
              />
              {errors.socialLinks?.linkedin && (
                <p className="text-sm text-red-500">
                  {errors.socialLinks.linkedin.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="socialLinks.github">GitHub Profile</Label>
              <Input
                id="socialLinks.github"
                {...register("socialLinks.github", {
                  pattern: {
                    value: /^https?:\/\/(www\.)?github\.com/,
                    message: "Please enter a valid GitHub URL",
                  },
                })}
                className="border-pink-600 focus:ring-pink-600"
                placeholder="https://github.com/username"
              />
              {errors.socialLinks?.github && (
                <p className="text-sm text-red-500">
                  {errors.socialLinks.github.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
}

export default Settings;
