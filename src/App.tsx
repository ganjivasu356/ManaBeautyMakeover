// src/App.tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Error from "./components/Error";
import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import Services from "./Views/Services";
import About from "./Views/About";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/services",
            element: <Services />,
          },
          {
            path: "/contactUs",
            element: <ContactUs />,
          },
        ],
      },
    ],
    {
      basename: "/ManaBeautyMakeover",
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
