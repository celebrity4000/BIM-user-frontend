import React from "react";
import { Card } from "@/components/ui/card";
import Layout from "./Layout";
import DynamicBreadcrumb from "@/components/TeachersComponents/Breadcrumbs/Breadcrumb";
import {
  ChevronRight,
  ClipboardList,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from "recharts";
import { TooltipProvider } from "@/components/ui/tooltip";

// Your existing data constants remain the same
const breadcrumbItems = [
  {
    label: "Dashboard",
    href: "/teacher/dashboard",
  },
];

const yourSchedule = [
  {
    className: "BIM 1",
    time: "10:00 AM",
    link: "/teacher/schedule/BIM1",
  },
  {
    className: "BIM 2",
    time: "11:00 AM",
    link: "/teacher/schedule/BIM2",
  },
  {
    className: "BIM 3",
    time: "12:00 PM",
    link: "/teacher/schedule/BIM3",
  },
  {
    className: "BIM 4",
    time: "1:00 PM",
    link: "/teacher/schedule/BIM4",
  },
  {
    className: "BIM 5",
    time: "2:00 PM",
    link: "/teacher/schedule/BIM5",
  },
];

const yourPendingTasks = [
  {
    task: "Upload Assignment 1",
    due: "Due in 2 days",
    link: "/teacher/manage-course/1",
  },
  {
    task: "Upload Assignment 2",
    due: "Due in 5 days",
    link: "/teacher/manage-course/2",
  },
  {
    task: "Upload Assignment 3",
    due: "Due in 7 days",
    link: "/teacher/manage-course/3",
  },
  {
    task: "Upload the Test 1",
    due: "Due in 10 days",
    link: "/teacher/manage-course/4",
  },
];

const yourPendingQueryToReply = [
  {
    query: "What is the deadline for the assignment 1?",
    link: "/teacher/query/1",
  },
  {
    query: "What is the deadline for the assignment 2?",
    link: "/teacher/query/2",
  },
  {
    query: "What is the deadline for the assignment 3?",
    link: "/teacher/query/3",
  },
  {
    query: "What is the deadline for the test 1?",
    link: "/teacher/query/4",
  },
];

const analyticsData = [
  { name: "BIM 1", attendance: 85, submissions: 92, queries: 5 },
  { name: "BIM 2", attendance: 88, submissions: 87, queries: 3 },
  { name: "BIM 3", attendance: 92, submissions: 95, queries: 7 },
  { name: "BIM 4", attendance: 78, submissions: 82, queries: 4 },
  { name: "BIM 5", attendance: 90, submissions: 88, queries: 6 },
];

const AttendanceChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={analyticsData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <RechartsTooltip
        contentStyle={{
          backgroundColor: "white",
          border: "1px solid #ddd",
        }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="attendance"
        stroke="#FF006B"
        strokeWidth={2}
        name="Attendance %"
        dot={{ stroke: "#FF006B", strokeWidth: 2, fill: "white" }}
      />
      <Line
        type="monotone"
        dataKey="submissions"
        stroke="#D4005A"
        strokeWidth={2}
        name="Submissions %"
        dot={{ stroke: "#D4005A", strokeWidth: 2, fill: "white" }}
      />
    </LineChart>
  </ResponsiveContainer>
);

const QueriesChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={analyticsData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <RechartsTooltip
        contentStyle={{
          backgroundColor: "white",
          border: "1px solid #ddd",
        }}
      />
      <Legend />
      <Bar
        dataKey="queries"
        fill="#FF006B"
        name="Number of Queries"
        radius={[4, 4, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
);

function TeacherDashboard() {
  return (
    <Layout>
      <TooltipProvider>
        <div className="mb-3">
          <DynamicBreadcrumb items={breadcrumbItems} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Schedule Card */}
          <Card className="p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Clock size={20} className="text-[#FF006B]" />
                Your Schedule
              </h2>
            </div>
            <div className="space-y-4">
              {yourSchedule.map((schedule, index) => (
                <Link
                  to={schedule.link}
                  key={index}
                  state={{ schedule: schedule }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="font-medium">{schedule.className}</p>
                    <p className="text-sm text-gray-600">{schedule.time}</p>
                  </div>
                  <ChevronRight className="text-[#FF006B]" size={20} />
                </Link>
              ))}
            </div>
          </Card>

          {/* Pending Tasks Card */}
          <Card className="p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <ClipboardList size={20} className="text-[#D4005A]" />
                Pending Tasks
              </h2>
            </div>
            <div className="space-y-4">
              {yourPendingTasks.map((task, index) => (
                <Link
                  to={task.link || "#"}
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="font-medium">{task.task}</p>
                    <p className="text-sm text-[#FF006B]">{task.due}</p>
                  </div>
                  <ChevronRight className="text-[#D4005A]" size={20} />
                </Link>
              ))}
            </div>
          </Card>

          {/* Pending Queries Card */}
          <Card className="p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare size={20} className="text-[#FF006B]" />
                Pending Queries
              </h2>
            </div>
            <div className="space-y-4">
              {yourPendingQueryToReply.map((query, index) => (
                <Link
                  to={query.link}
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <p className="font-medium">{query.query}</p>
                  <ChevronRight className="text-[#D4005A]" size={20} />
                </Link>
              ))}
            </div>
          </Card>

          {/* Analytics Graphs */}
          <Card className="p-6 shadow-lg col-span-full">
            <h2 className="text-xl font-semibold mb-6">
              Attendance & Submissions Overview
            </h2>
            <div className="mb-8">
              <AttendanceChart />
            </div>

            <h2 className="text-xl font-semibold mb-6">Queries per Class</h2>
            <div>
              <QueriesChart />
            </div>
          </Card>
        </div>
      </TooltipProvider>
    </Layout>
  );
}

export default TeacherDashboard;
