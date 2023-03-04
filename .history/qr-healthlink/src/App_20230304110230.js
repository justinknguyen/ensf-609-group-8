import { createHashRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { QRGenerator } from "./containers/QRGenerator";
import { QRReader } from "./containers/QRReader";

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
