import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json")
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
