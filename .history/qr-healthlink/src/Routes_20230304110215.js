import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFound from "./containers/NotFound";
import Home from "./containers/Home";
import Login from "./containers/Login";
import QrGenerator from "./containers/QrGenerator";
import QrReader from "./containers/QrReader";

export default function Links() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hackathon-Group8/qr-generator" element={<QrGenerator />} />
        <Route path="/Hackathon-Group8/qr-reader" element={<QrReader />} />
        {
          /* Finally, catch all unmatched routes */
        }
        <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}