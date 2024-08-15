import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Content from "./components/3.content/Content";
import Details from "./components/6. details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
  },

  {
    path: "/topic/:topicId",
    element: <Details />,
  },
]);

export default Router;