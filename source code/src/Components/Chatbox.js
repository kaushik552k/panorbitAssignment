import React, { useContext, useState } from "react";
import UserContext from "../Utilities/UserContext";
import chat from "../Assets/chat.svg";

const Chatbox = () => {
  const users = useContext(UserContext);
  const [isOpen, setIsOpen] = useState();

  function handleClick() {}

  return (
    <div className="flex flex-col float-right  sticky bottom-0">
      <div
        className="font-bold flex tracking-wider cursor-pointer w-40 gap-2 p-2
        "
        style={{ backgroundColor: "#2c65c8" }}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <img src={chat} alt="" className="w-5" />
        <h2 className="text-xl">Chat</h2>
      </div>

      {isOpen && (
        <div
          className="bg-white shadow-2xl p-4 absolute rounded-lg flex-col items-start bottom-16 right-0 h-96 text-center"
          style={{ width: "200%" }}
        >
          <div>
            <div className="overflow-auto h-80 bg-white">
              {users.users.map((user) => {
                return (
                  <div
                    key={user.id}
                    className=" flex items-center gap-4 cursor-pointer mb-2 text-left"
                    onClick={() => handleClick(user.id)}
                  >
                    <img
                      src={user.profilepicture}
                      alt=""
                      className="w-10 rounded-full"
                    />
                    <h3>{user.name}</h3>
                    <span className="bg-green-800 rounded-full w-3 h-3 items-center"></span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
