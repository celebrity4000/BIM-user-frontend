import React from "react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/StudentComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/StudentComponents/Navigation/SidebarNavigation";
import DynamicBreadcrumb from "@/components/StudentComponents/Breadcrumbs/Breadcrumb";
import VideoPlayer from "@/components/Video/VideoPlayer";

const Videos = () => {
  const breadcrumbItems = [
    {
      label: "Videos",
      href: "/student/videos",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex">
        <SidebarNavigation />
        <div className="flex-1 p-8 max-h-screen bg-gradient-to-br from-pink-50 to-pink-100 overflow-y-scroll">
          <DynamicBreadcrumb items={breadcrumbItems} />

          {/* Video Player */}
          <VideoPlayer url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" />

          {/* Keyboard Controls Help */}
          <Card className="mt-4 p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Video Controls:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>• Click play/pause button to control playback</p>
                <p>• Use the volume slider to adjust sound</p>
                <p>• Click the mute button to toggle sound</p>
              </div>
              <div>
                <p>• Drag the progress bar to seek</p>
                <p>• Click fullscreen button to expand</p>
                <p>• Hover over video to show controls</p>
              </div>
            </div>
          </Card>

          {/* Video List Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Available Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Video Cards */}
              <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <h3 className="font-semibold">Introduction to Course</h3>
                <p className="text-sm text-gray-600">Duration: 10:30</p>
              </Card>

              <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <h3 className="font-semibold">Chapter 1: Getting Started</h3>
                <p className="text-sm text-gray-600">Duration: 15:45</p>
              </Card>

              <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <h3 className="font-semibold">Chapter 2: Basic Concepts</h3>
                <p className="text-sm text-gray-600">Duration: 20:15</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
