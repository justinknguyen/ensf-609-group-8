import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFound from "./containers/NotFound";
import Home from "./containers/Home";
import QrGenerator from "./containers/QRGenerator";
import QrReader from "./containers/QrReader";

export default function Links() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-generator" element={<QrGenerator />} />
        <Route path="/qr-reader" element={<QrReader />} />
        {
          /* Finally, catch all unmatched routes */
        }
        <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}