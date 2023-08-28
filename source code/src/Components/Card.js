import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ users }) => {
  return (
    <>
      <div className="block w-96 h-1/4 rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className=" p-12 text-2xl bg-gray-400 text-center">
          Select an account
        </div>
        <ul className="w-full overflow-y-auto h-96">
          {users.users.map((user) => {
            return (
              <li
                className="w-full border-b-2 border-opacity-100 px-4 py-3 cursor-pointer list"
                key={user.id}
              >
                <NavLink to={"home/" + user.id + "/profile"}>
                  <img
                    src={user.profilepicture}
                    alt="profile"
                    className="inline-block w-11 rounded-full m-3"
                  />
                  {user.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Card;
