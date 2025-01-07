import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home";
        break;
      case "/about":
        document.title = "About";
        break;
      case "/projects":
        document.title = "Projects";
        break;
      case "/contact":
        document.title = "Contact";
        break;
      default:
        document.title = "My App";
    }
  }, [location.pathname]);

  return null;
};