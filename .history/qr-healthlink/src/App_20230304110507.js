


import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./lib/contextLib";
import Routes from "./Routes";
import "./App.css";


const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/qr-generator",
    element: <QRGenerator />,
  },
  {
    path: "/qr-reader",
    element: <QRReader />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
