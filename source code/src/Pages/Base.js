import React, { useContext } from "react";
import Card from "../Components/Card";
import Shimmer from "../Components/Shimmer";
import UserContext from "../Utilities/UserContext";

const Base = () => {
  let users = useContext(UserContext);

  return (
    <div className="App">
      {users ? <Card users={users} /> : <Shimmer></Shimmer>}
    </div>
  );
};

export default Base;
