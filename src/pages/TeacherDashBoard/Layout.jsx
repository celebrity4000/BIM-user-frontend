import Navigation from "@/components/TeachersComponents/Navigation/Navigation";
import SidebarNavigation from "@/components/TeachersComponents/Navigation/SidebarNavigation";
import { ClassProvider } from "@/components/TeachersComponents/ScheduleClass/ClassContext";

import React from "react";

function Layout({ children }) {
  return (
    <ClassProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <Navigation />

        <div className="flex">
          {/* Sidebar */}
          <SidebarNavigation />

          {/* Main Content */}
          <main className="flex-1 p-8 max-h-screen bg-gradient-to-br from-pink-50 to-pink-100 overflow-y-scroll">
            {children}
          </main>
        </div>
      </div>
    </ClassProvider>
  );
}

export default Layout;
