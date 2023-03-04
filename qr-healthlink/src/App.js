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
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
