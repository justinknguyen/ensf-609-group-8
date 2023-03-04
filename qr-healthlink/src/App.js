import { createHashRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { QRGenerator } from "./QRGenerator";
import { QRReader } from "./QRReader";

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
  {
    path: "/reader",
    element: <QrReader />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
