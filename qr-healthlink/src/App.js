import { createHashRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import QrReader from "./containers/QrReader"

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/a",
    element: <Page1 />,
  },
  {
    path: "/b",
    element: <Page2 />,
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
