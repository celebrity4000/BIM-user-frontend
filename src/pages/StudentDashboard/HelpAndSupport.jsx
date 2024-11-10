import React from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, Phone, Send } from "lucide-react";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpAndSupport = () => {
  const breadcrumbItems = [
    {
      label: "Help & Support",
      href: "/student/support",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      issueType: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const issueTypes = [
    { value: "general", label: "General Query" },
    { value: "technical", label: "Technical Issue" },
    { value: "course", label: "Course Related" },
    { value: "batch", label: "Batch Related" },
    { value: "payment", label: "Payment Issue" },
  ];

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email address.",
    },
    {
      question: "How can I change my batch timing?",
      answer:
        "To change your batch timing, please raise a request through the form above selecting 'Batch Related' as the issue type. Our support team will assist you within 24 hours.",
    },
    {
      question: "Where can I find my course materials?",
      answer:
        "All course materials are available in the 'Resources' section of your dashboard. You can access them anytime after logging in.",
    },
    {
      question: "How do I download my certificate?",
      answer:
        "Certificates are automatically generated upon course completion. Visit your 'Achievements' section to download them.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Our refund policy allows for full refunds within 7 days of purchase if you're not satisfied with the course. Please check our terms and conditions for more details.",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="flex-1 p-8 max-h-screen bg-gradient-to-br from-pink-50 to-pink-100 overflow-y-scroll">
          <DynamicBreadcrumb items={breadcrumbItems} />

          {/* Submit Issue Section */}
          <Card className="my-8 border-pink-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-pink-900">Submit a Query</CardTitle>
              <CardDescription className="text-pink-700">
                Please provide details about your issue and we'll get back to
                you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-pink-900">
                    Issue Type
                  </label>
                  <select
                    {...register("issueType", {
                      required: "Please select an issue type",
                    })}
                    className="w-full rounded-md border border-pink-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Select issue type</option>
                    {issueTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.issueType && (
                    <span className="text-red-500 text-sm">
                      {errors.issueType.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-pink-900">
                    Description
                  </label>
                  <Textarea
                    {...register("description", {
                      required: "Please provide a description",
                      minLength: {
                        value: 10,
                        message:
                          "Description must be at least 10 characters long",
                      },
                    })}
                    placeholder="Please describe your issue in detail..."
                    className="min-h-32 border-pink-200 focus:ring-pink-500"
                  />
                  {errors.description && (
                    <span className="text-red-500 text-sm">
                      {errors.description.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Query
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Emergency Contact Alert */}
          <Alert className="mb-8 border-pink-300 bg-pink-50">
            <AlertCircle className="h-4 w-4 text-pink-600" />
            <AlertTitle className="text-pink-900">
              Need Immediate Assistance?
            </AlertTitle>
            <AlertDescription className="text-pink-700">
              Call our support hotline at
              <a
                href="tel:1-800-45871"
                className="underline hover:text-pink-700"
              >
                <Phone className="h-4 w-4 inline-block mx-1 text-pink-600" />
                1-800-45871 (Available 24/7)
              </a>
            </AlertDescription>
          </Alert>

          {/* FAQ Section */}
          <Card className="border-pink-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-pink-900">
                Frequently Asked Questions
              </CardTitle>
              <CardDescription className="text-pink-700">
                Find quick answers to common questions below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-pink-200"
                  >
                    <AccordionTrigger className="text-pink-900 hover:text-pink-700">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-pink-800">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
