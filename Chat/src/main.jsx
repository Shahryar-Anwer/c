import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp.jsx";
import SignIn from "./pages/sign-in/SignIn.jsx";
import MessageScreen from "./pages/single-chat/message-screen/MessageScreen.jsx";
import Messaging from "./pages/messaging/Messaging.jsx";
import GroupMessageScreen from "./pages/group-chats/group-message-screen/GroupMessageScreen.jsx";
import DemoGrid from "./pages/mui-grid/GridDemo.jsx"

/* redux-toolkit imports */
import { Provider } from "react-redux";
import { store } from "./redux-store/store/Store.jsx";
import GridDemo2 from "./pages/mui-grid/GridDemo2.jsx";
import GridDemo3 from "./pages/mui-grid/GridDemo3.jsx";
import DataSubGrid2_2 from "./pages/mui-grid/DataSubGrid2_2.jsx";
import GridFour from "./pages/mui-grid/GridFour.jsx";
import GridFive from "./pages/mui-grid/GridFive.jsx";
import GridSix from "./pages/mui-grid/GridSix.jsx";
import GridSeven from "./pages/mui-grid/GridSeven.jsx";
import GridEight from "./pages/mui-grid/GridEight.jsx";

import Grid from "./pages/grid-attempt-two/first/Gird.jsx";

const router = createBrowserRouter([
  /* {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/message-screen",
    element: <MessageScreen />
  },
  {
    path: "/group-message-screen",
    element: <GroupMessageScreen />
  },
  {
    path: "/messages",
    element: <Messaging />,
  },
  {
    path: "/mui-grid",
    element: <DemoGrid />,
  },
  {
    path: "/mui-grid-two",
    element: <GridDemo2 /> ,
  },
  {
    path: "/mui-grid-three",
    element: <DataSubGrid2_2 /> ,
  },
  {
    path: "/mui-grid-four",
    element: <GridFour /> ,
  },
  {
    path: "/mui-grid-five",
    element: <GridFive /> ,
  }, */
  {
    path: "/",
    element: <GridSix /> ,
  },
  /* {
    path: "/mui-grid-seven",
    element: <GridSeven /> ,
  },*/
  {
    path: "/mui-grid-eight",
    element:  <GridEight />,
  }, 
  {
    path: "/first",
    element:  <Grid />,
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
