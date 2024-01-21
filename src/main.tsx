import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddPage } from "./pages/AddPage.tsx";
import { EditPage } from './pages/EditPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/details",
    element: <DetailsPage />,
  },
  {
    path: "/add",
    element: <AddPage />
  },
  {
    path: "/edit",
    element: <EditPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container mt-5">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
