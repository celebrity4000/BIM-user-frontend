import React, { useState, useEffect } from "react";
import {
  Camera,
  Mic,
  MicOff,
  VideoOff,
  PhoneOff,
  Maximize,
  Minimize,
  Monitor,
} from "lucide-react";
import Layout from "./Layout";
import { useLocation, useParams } from "react-router-dom";
import DynamicBreadcrumb from "@/components/TeachersComponents/Breadcrumbs/Breadcrumb";
import { Alert, AlertDescription } from "@/components/ui/alert";

const breadcrumbItems = [
  {
    label: "Schedule",
    href: "/teacher/schedule",
  },
  {
    label: "Live Class",
    href: "/teacher/schedule",
  },
];

function LiveClass() {
  const location = useLocation();
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleStartCall = () => {
    if (isMobile) {
      return;
    }
    setIsCallStarted(true);
  };

  const handleEndCall = () => {
    setIsCallStarted(false);
    setIsScreenSharing(false);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
  };

  if (isMobile) {
    return (
      <Layout>
        <div className="mb-3">
          <DynamicBreadcrumb items={breadcrumbItems} />
        </div>
        <div className="p-4">
          <Alert className="bg-red-50 border-red-200">
            <AlertDescription className="text-center py-4">
              <h3 className="text-lg font-semibold mb-2">Desktop Required</h3>
              <p>
                To start or join a class, please use a desktop or laptop
                computer. Mobile devices are not supported for teaching classes.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className={`transition-all duration-300 ${isFullScreen ? "p-0" : ""}`}
      >
        <div className={`mb-3 ${isFullScreen ? "hidden" : ""}`}>
          <DynamicBreadcrumb items={breadcrumbItems} />
        </div>

        <div
          className={`${
            isFullScreen ? "w-full h-screen" : "max-w-4xl mx-auto p-4"
          }`}
        >
          {/* Class Info Header */}
          <div
            className={`bg-white rounded-lg shadow-md p-4 mb-6 ${
              isFullScreen ? "hidden" : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Class: {location.state?.schedule?.className}
            </h2>
            <p className="text-gray-600">
              Time: {location.state?.schedule?.time}
            </p>
          </div>

          {/* Video Call Container */}
          <div
            className={`relative bg-gray-900 rounded-lg overflow-hidden ${
              isFullScreen ? "w-full h-screen" : "h-[480px]"
            }`}
          >
            {!isCallStarted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-white text-xl mb-6">
                  Ready to start the class?
                </div>
                <button
                  onClick={handleStartCall}
                  className="px-8 py-3 rounded-full text-white font-semibold"
                  style={{ backgroundColor: "#FF006B" }}
                >
                  Start Class
                </button>
              </div>
            ) : (
              <>
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-lg">
                    {isScreenSharing
                      ? "Screen Share Active"
                      : "Video will appear here"}
                  </div>
                </div>

                {/* Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90 p-4 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-3 rounded-full hover:bg-gray-700 text-white"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
                  </button>
                  <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className="p-3 rounded-full hover:bg-gray-700 text-white"
                    title={isVideoOff ? "Turn Video On" : "Turn Video Off"}
                  >
                    {isVideoOff ? <VideoOff size={24} /> : <Camera size={24} />}
                  </button>
                  <button
                    onClick={toggleScreenShare}
                    className={`p-3 rounded-full hover:bg-gray-700 text-white ${
                      isScreenSharing ? "bg-green-600" : ""
                    }`}
                    title={isScreenSharing ? "Stop Sharing" : "Share Screen"}
                  >
                    <Monitor size={24} />
                  </button>
                  <button
                    onClick={toggleFullScreen}
                    className="p-3 rounded-full hover:bg-gray-700 text-white"
                    title={
                      isFullScreen ? "Exit Full Screen" : "Enter Full Screen"
                    }
                  >
                    {isFullScreen ? (
                      <Minimize size={24} />
                    ) : (
                      <Maximize size={24} />
                    )}
                  </button>
                  <button
                    onClick={handleEndCall}
                    className="p-3 rounded-full text-white"
                    style={{ backgroundColor: "#FF006B" }}
                    title="End Call"
                  >
                    <PhoneOff size={24} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LiveClass;
