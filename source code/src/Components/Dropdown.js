import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ user, users }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleClick(id) {
    navigate("/home/" + id + "/profile");
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="font-bold tracking-wider"
      >
        {user.name}
      </button>
      {isOpen && (
        <div className="bg-white shadow-2xl p-4 rounded-lg absolute flex-col items-start right-12 h-90 w-1/4 text-center">
          <div>
            <div className="current flex flex-col justify-center items-center">
              <img
                src={user.profilepicture}
                alt=""
                className="w-20 rounded-full"
              />
              <h3>{user.name}</h3>
              <h3 className="text-gray-500">{user.email}</h3>
            </div>
            <div className="overflow-auto h-32 bg-white">
              {users.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="border-b-2 p-2 flex justify-evenly cursor-pointer"
                    style={{ margin: "1em 3em" }}
                    onClick={() => handleClick(user.id)}
                  >
                    <img
                      src={user.profilepicture}
                      alt=""
                      className="w-10 rounded-full"
                    />
                    <h3>{user.name}</h3>
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="bg-red-700 text-white rounded-xl font-bold"
                style={{ padding: "0.40em 1.4em" }}
              >
                Signout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
