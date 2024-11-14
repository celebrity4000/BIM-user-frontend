import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "../api/authHandler";
import LoadingPage from "@/components/Loading_Pages/Loading_Page";

const GeneralRoutes = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const validateSession = async () => {
      try {
        const response = await AuthService.validateUserSession();
        console.log(response);
        if (response.message == "Session Validated") {
          setIsAuthenticated(true);
          setUserType(response.userType);
        }
        console.log(response.userType);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    validateSession();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isAuthenticated) {
    if (userType === "student") {
      return (
        <Navigate to="/student/dashboard" state={{ from: location }} replace />
      );
    } else if (userType === "trainer") {
      return (
        <Navigate to="/teacher/dashboard" state={{ from: location }} replace />
      );
    }
  }

  return children;
};

export default GeneralRoutes;
