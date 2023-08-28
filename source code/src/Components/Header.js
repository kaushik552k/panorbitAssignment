import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserContext from "../Utilities/UserContext";
import Dropdown from "./Dropdown";

const Header = () => {
  let { id } = useParams();
  let route = useLocation();

  const [user, setUser] = useState();
  let { users } = useContext(UserContext);

  route = route.pathname.split("").reverse();
  route = route.slice(0, route.indexOf("/")).reverse().join("");

  useEffect(() => {
    setUser(users[id - 1]);
  }, [id, users]);

  return (
    <div className="header">
      <h1 className="text-2xl font-bold text-gray-600 text-left">
        {route.charAt(0).toUpperCase() + route.slice(1)}
      </h1>
      <div className="z-10">
        {user ? <Dropdown user={user} users={users} /> : "Invalid User"}
      </div>
    </div>
  );
};

export default Header;
