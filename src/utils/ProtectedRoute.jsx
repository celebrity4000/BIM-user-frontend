import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "../api/authHandler";
import LoadingPage from "@/components/Loading_Pages/Loading_Page";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [guestUser, setGuestUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateSession = async () => {
      setIsLoading(true);
      try {
        const response = await AuthService.validateUserSession();
        // console.log(response);
        if (response.message === "Session Validated") {
          if (response.userType === "student") setIsAuthenticated(true);
          else if (response.userType === "trainer") setIsAuthenticated(false);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        if (error.status === 404) {
          setGuestUser(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    validateSession();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (guestUser || !isAuthenticated) {
    console.log("Redirecting to /");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
