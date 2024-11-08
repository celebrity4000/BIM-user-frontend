import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "../api/authHandler";
import LoadingPage from "@/components/Loading_Pages/Loading_Page";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [guestUser, setGuestUser] = useState(false);

  console.log("ProtectedRoute");
  useEffect(() => {
    console.log("ProtectedRoute useEffect");
    const validateSession = async () => {
      try {
        const response = await AuthService.validateUserSession();
        if (response.message === "Session Validated") {
          console.log("Session Validated");
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        console.log(response.userType);
      } catch (error) {
        if (error.status === 404) {
          setGuestUser(true);
        }
      }
    };
    validateSession();
  }, []);

  if (isAuthenticated === null) {
    return <LoadingPage />;
  }

  if (guestUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
