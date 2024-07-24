import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import DemandsPage from "../pages/DemandsPage";
import ErrorPage from "../pages/ErrorPage";
import EmployeePage from "../pages/EmployeePage";
import DemandDetailsPage from "../pages/DemandDetailsPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />
    },
    {
      path: "/demands",
      element: <DemandsPage />
    },
    {
      path: "/demands/:id",
      element: <DemandDetailsPage />
    },
    {
      path:"/employee",
      element:<EmployeePage />
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ]);