import "./App.css";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Pages/Profile";
import Posts from "./Pages/Posts";
import Gallery from "./Pages/Gallery";
import ToDo from "./Pages/ToDo";
import Base from "./Pages/Base";
import UserContext from "./Utilities/UserContext";
import { useEffect, useState } from "react";
import useUserData from "./Utilities/useUserData";
import Helper from "./Components/Helper";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <Helper text="Error 404 Not found" />,
  },
  {
    path: "home/:id",
    element: <Home />,
    errorElement: <Helper text="Error 404 Not found" />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "post",
        element: <Posts />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "todo",
        element: <ToDo />,
      },
    ],
  },
]);

function App() {
  const [users, setUsers] = useState();
  const { response } = useUserData();

  useEffect(() => {
    setUsers(response);
  }, [response, users]);

  return (
    <UserContext.Provider value={users}>
      <RouterProvider router={appRouter}></RouterProvider>;
    </UserContext.Provider>
  );
}

export default App;
