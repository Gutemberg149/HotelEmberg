import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../src/assets/pages/homePage/Index";
import Rooms from "../src/assets/pages/rooms/Rooms";
import SignUp from "./assets/pages/singUp/SignUp";
import GlobalStyle from "../src/assets/utils/Globalstyle";
import LanguageToggleProvider from "../src/assets/context/LanguageContext";
import UserAuthContextProvider from "../src/assets/context/userAuthContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "rooms",
    element: <Rooms />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <LanguageToggleProvider>
      <UserAuthContextProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </UserAuthContextProvider>
    </LanguageToggleProvider>
  </>
);
