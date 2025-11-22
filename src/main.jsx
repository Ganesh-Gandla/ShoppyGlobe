import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Loader from "./components/Loader";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const provider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <ProductPage />
      },
      {
        path: "/cartpage",
        element: <CartPage />
      },
      {
        path: "/checkout",
        element: <CheckOut />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={provider} />
    </Suspense>
  </StrictMode>
);
