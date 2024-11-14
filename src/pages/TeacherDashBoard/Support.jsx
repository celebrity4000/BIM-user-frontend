import React from "react";
import Layout from "./Layout";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const problemTypes = [
  { id: "technical", label: "Technical Issue" },
  { id: "general", label: "General Query" },
  { id: "billing", label: "Billing & Payments" },
  { id: "account", label: "Account Related" },
];

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password. Follow the link in the email to create a new password.",
  },
  {
    question: "How can I update my course content?",
    answer:
      "You can update your course content by navigating to the 'Manage Courses' section, selecting the course you want to edit, and clicking on the 'Edit' button. Make your changes and save them.",
  },
  {
    question: "How do I create a new batch?",
    answer:
      "To create a new batch, go to the 'Manage Batches' section and click on 'Create New Batch'. Fill in the required information such as batch name, schedule, and assign courses and trainers.",
  },
  {
    question: "Can I assign multiple trainers to a batch?",
    answer:
      "Yes, you can assign multiple trainers to a batch. When creating or editing a batch, you can select multiple trainers from the trainer selection dropdown menu.",
  },
  {
    question: "How do I view my student's progress?",
    answer:
      "You can view student progress by accessing the 'Analytics' section. Here you'll find detailed reports on student attendance, performance, and course completion rates.",
  },
];

function Support() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Add your API call here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      alert("Support ticket created successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting support ticket:", error);
      alert("Error submitting support ticket. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Help Form */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-pink-600">
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="problemType">Type of Problem</Label>
                <select
                  id="problemType"
                  {...register("problemType", {
                    required: "Please select a problem type",
                  })}
                  className="w-full p-2 border rounded-md border-pink-600 focus:ring-pink-600 focus:border-pink-600 bg-white"
                >
                  <option value="">Select Problem Type</option>
                  {problemTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.problemType && (
                  <p className="text-sm text-red-500">
                    {errors.problemType.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="border-pink-600 focus:ring-pink-600"
                />
                {errors.subject && (
                  <p className="text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 20,
                      message: "Description should be at least 20 characters",
                    },
                  })}
                  className="min-h-[150px] border-pink-600 focus:ring-pink-600"
                  placeholder="Please describe your issue in detail..."
                />
                {errors.description && (
                  <p className="text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Support Ticket"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQs Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-pink-600">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default Support;
