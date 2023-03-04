import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFound from "./containers/NotFound";
import Home from "./containers/Home";
import QrGenerator from "./containers/QRGenerator";
import QrReader from "./containers/QRReader";

export default function Links() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-generator" element={<QRGenerator />} />
        <Route path="/qr-reader" element={<QRReader />} />
        {
          /* Finally, catch all unmatched routes */
        }
        <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}