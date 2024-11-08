import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Settings,
  BarChart2,
  HelpCircle,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    noSubItems: true,
    link: "/dashboard",
  },
  {
    title: "Training Section",
    icon: BookOpen,
    subItems: [
      { name: "Training", link: "/training" },
      { name: "Training Programs", link: "/training-programs" },
    ],
  },
  {
    title: "Learning and Development",
    icon: GraduationCap,
    subItems: [
      { name: "Your Courses", link: "/courses" },
      { name: "Your Batches", link: "/batches" },
    ],
  },
  {
    title: "Internships and Jobs",
    icon: Briefcase,
    subItems: [
      { name: "Internships", link: "/internships" },
      { name: "Jobs", link: "/jobs" },
    ],
  },
  {
    title: "Certificates",
    icon: Award,
    noSubItems: true,
    link: "/certificates",
  },
  {
    title: "Settings",
    icon: Settings,
    noSubItems: true,
    link: "/settings",
  },
  {
    title: "Analytics",
    icon: BarChart2,
    noSubItems: true,
    link: "/analytics",
  },
  {
    title: "Help and Support",
    icon: HelpCircle,
    noSubItems: true,
    link: "/support",
  },
];

const SidebarNavigation = ({ onNavigate = () => {} }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleSubmenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleNavigation = (link) => {
    navigate(`/student${link}`);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-lg text-gray-700 hover:bg-gray-100"
    >
      {isMobileMenuOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );

  const NavigationContent = () => (
    <div className="py-4">
      {navigationItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => {
              if (item.noSubItems) {
                handleNavigation(item.link);
              } else {
                toggleSubmenu(item.title);
              }
            }}
            className={`w-full p-4 flex items-center text-gray-700 hover:bg-[#FF006B]/5 
                     hover:text-[#FF006B] transition-colors ${
                       openMenus[item.title]
                         ? "bg-[#FF006B]/5 text-[#FF006B]"
                         : ""
                     }`}
          >
            <item.icon className="h-5 w-5" />
            {(isOpen || isMobile) && (
              <>
                <span className="ml-3 text-start">{item.title}</span>
                {!item.noSubItems && (
                  <ChevronDown
                    className={`ml-auto h-4 w-4 transition-transform ${
                      openMenus[item.title] ? "transform rotate-180" : ""
                    }`}
                  />
                )}
              </>
            )}
          </button>

          {(isOpen || isMobile) &&
            !item.noSubItems &&
            openMenus[item.title] && (
              <div className="bg-gray-50">
                {item.subItems.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => handleNavigation(subItem.link)}
                    className="w-full p-3 pl-12 text-left text-gray-600 hover:bg-[#FF006B]/5 
                           hover:text-[#FF006B] transition-colors"
                  >
                    {subItem.name}
                  </button>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );

  // Mobile Menu Overlay
  const MobileMenu = () => (
    <div
      className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#FF006B]">Navigation</h2>
        </div>
        <NavigationContent />
      </div>
    </div>
  );

  // Desktop Sidebar
  const DesktopSidebar = () => (
    <div
      className={`hidden md:block min-h-[calc(100vh-4rem)] bg-white shadow-lg transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } border-r border-[#FF006B]/10`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-[#FF006B] hover:bg-[#FF006B]/5 transition-colors"
      >
        {isOpen ? (
          <ChevronLeft className="h-6 w-6 ml-auto" />
        ) : (
          <ChevronRight className="h-6 w-6 mx-auto" />
        )}
      </button>
      <NavigationContent />
    </div>
  );

  return (
    <>
      <MobileMenuButton />
      <MobileMenu />
      <DesktopSidebar />
    </>
  );
};

export default SidebarNavigation;
