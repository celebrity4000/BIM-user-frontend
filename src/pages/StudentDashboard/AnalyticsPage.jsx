import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Trophy,
  BookOpen,
  GraduationCap,
  Target,
  TrendingUp,
  Clock,
  Check,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";

const breadcrumbItems = [
  {
    label: "Analytics",
    href: "/student/analytics",
  },
];
// Mock data for performance metrics
const performanceData = {
  courseProgress: {
    completed: 68,
    total: 100,
    lastAccessed: "2024-03-10",
    hoursSpent: 145,
  },
  assignments: {
    completed: 24,
    pending: 3,
    total: 30,
    onTime: 22,
    late: 2,
  },
  testScores: {
    average: 85,
    highest: 95,
    lowest: 72,
    totalTests: 8,
  },
};

// Mock data for progress over time
const monthlyProgressData = [
  { month: "Jan", score: 75, attendance: 90, assignments: 85 },
  { month: "Feb", score: 82, attendance: 88, assignments: 78 },
  { month: "Mar", score: 78, attendance: 92, assignments: 88 },
  { month: "Apr", score: 85, attendance: 86, assignments: 82 },
  { month: "May", score: 88, attendance: 94, assignments: 90 },
  { month: "Jun", score: 92, attendance: 90, assignments: 85 },
];

// Mock data for subject performance
const subjectPerformanceData = [
  {
    subject: "Mathematics",
    tests: 88,
    assignments: 85,
    participation: 90,
    overall: 87,
  },
  {
    subject: "Physics",
    tests: 82,
    assignments: 88,
    participation: 85,
    overall: 85,
  },
  {
    subject: "Chemistry",
    tests: 90,
    assignments: 92,
    participation: 88,
    overall: 90,
  },
  {
    subject: "Biology",
    tests: 85,
    assignments: 80,
    participation: 92,
    overall: 86,
  },
];

// Mock weekly activity data
const weeklyActivityData = [
  { day: "Mon", hours: 4.5, completed: 3 },
  { day: "Tue", hours: 3.8, completed: 2 },
  { day: "Wed", hours: 5.2, completed: 4 },
  { day: "Thu", hours: 4.0, completed: 3 },
  { day: "Fri", hours: 4.8, completed: 4 },
  { day: "Sat", hours: 2.5, completed: 2 },
  { day: "Sun", hours: 1.5, completed: 1 },
];

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen w-full bg-pink-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="min-h-screen bg-pink-50 p-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-pink-900 mb-8">
              Performance Analytics
            </h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-pink-200">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-pink-900">
                    Course Progress
                  </CardTitle>
                  <Trophy className="h-4 w-4 text-pink-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pink-900">
                    {performanceData.courseProgress.completed}%
                  </div>
                  <Progress
                    value={performanceData.courseProgress.completed}
                    className="mt-2"
                  />
                  <p className="text-xs text-pink-600 mt-2">
                    {performanceData.courseProgress.hoursSpent} hours spent
                    learning
                  </p>
                </CardContent>
              </Card>

              <Card className="border-pink-200">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-pink-900">
                    Assignments
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-pink-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pink-900">
                    {performanceData.assignments.completed}/
                    {performanceData.assignments.total}
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-pink-600">
                      {performanceData.assignments.pending} pending
                    </span>
                    <span className="text-green-600">
                      {performanceData.assignments.onTime} on time
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-200">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-pink-900">
                    Test Average
                  </CardTitle>
                  <GraduationCap className="h-4 w-4 text-pink-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pink-900">
                    {performanceData.testScores.average}%
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-pink-600">
                    <span>Highest: {performanceData.testScores.highest}%</span>
                    <span>Tests: {performanceData.testScores.totalTests}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-200">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-pink-900">
                    Overall Grade
                  </CardTitle>
                  <Target className="h-4 w-4 text-pink-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pink-900">A-</div>
                  <p className="text-xs text-pink-600 mt-2">Top 15% of class</p>
                </CardContent>
              </Card>
            </div>

            {/* Progress Over Time Graph */}
            <Card className="border-pink-200 mb-8">
              <CardHeader>
                <CardTitle className="text-pink-900">
                  Progress Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyProgressData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                      <XAxis dataKey="month" stroke="#831843" />
                      <YAxis stroke="#831843" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#ff006b"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="attendance"
                        stroke="#be185d"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="assignments"
                        stroke="#9d174d"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Subject Performance Graph */}
            <Card className="border-pink-200 mb-8">
              <CardHeader>
                <CardTitle className="text-pink-900">
                  Subject Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={subjectPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                      <XAxis dataKey="subject" stroke="#831843" />
                      <YAxis stroke="#831843" />
                      <Tooltip />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="tests"
                        stackId="1"
                        stroke="#ff006b"
                        fill="#ff006b"
                        fillOpacity={0.3}
                      />
                      <Area
                        type="monotone"
                        dataKey="assignments"
                        stackId="2"
                        stroke="#be185d"
                        fill="#be185d"
                        fillOpacity={0.3}
                      />
                      <Area
                        type="monotone"
                        dataKey="participation"
                        stackId="3"
                        stroke="#9d174d"
                        fill="#9d174d"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Reports */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-pink-200">
                <CardHeader>
                  <CardTitle className="text-pink-900">
                    Weekly Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyActivityData.map((day) => (
                      <div
                        key={day.day}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-pink-600 mr-2" />
                          <span className="text-pink-900">{day.day}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-pink-600">{day.hours} hrs</span>
                          <span className="text-green-600">
                            {day.completed} completed
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-200">
                <CardHeader>
                  <CardTitle className="text-pink-900">
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-pink-900">
                          Perfect Attendance Week
                        </span>
                      </div>
                      <span className="text-pink-600">Mar 10, 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-pink-900">Top Quiz Score</span>
                      </div>
                      <span className="text-pink-600">Mar 8, 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-pink-900">
                          All Assignments Completed
                        </span>
                      </div>
                      <span className="text-pink-600">Mar 5, 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
