import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../Utilities/UserContext";

const Profile = () => {
  let { id } = useParams();
  const [user, setUser] = useState();
  let { users } = useContext(UserContext);
  const [iFrameData, setIframeData] = useState();

  useEffect(() => {
    setUser(users[id - 1]);
    setIframeData(
      `https://maps.google.com/maps?q=${user?.address?.geo?.lat},${user?.address?.geo?.lng}&hl=es;&output=embed`
    );
  }, [user, users, id]);

  return (
    <div className="main">
      {user !== undefined ? (
        <>
          <section className="left">
            <div className="flex flex-col items-center">
              <img
                src={user.profilepicture}
                alt="profile"
                style={{ width: "50%", borderRadius: "50%" }}
              />
              <h1 className="text-2xl font-bold text-gray-600">{user.name}</h1>
              <div className="w-full mr-10">
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    Username:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.username}
                  </h1>
                </div>
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    e-mail:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.email}
                  </h1>
                </div>
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    Phone:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.phone}
                  </h1>
                </div>
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    Website:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.website}
                  </h1>
                </div>
              </div>
            </div>
            <div className="company">
              <h1 className="text-2xl font-bold text-gray-600 text-center p-3">
                Company
              </h1>
              <div className="w-full mr-10">
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    Name:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.company.name}
                  </h1>
                </div>
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    Catchphrase:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.company.catchPhrase}
                  </h1>
                </div>
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    bs:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.company.bs}
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="right">
            <div className="address">
              <span className="text-2xl text-gray-400 p-3">Address</span>
              <div className="w-full mr-10">
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    Street:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.address.street}
                  </h1>
                </div>
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    Suite:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.address.suite}
                  </h1>
                </div>
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    City:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.address.city}
                  </h1>
                </div>
                <div className="flex w-full">
                  <span className="text-2xl text-gray-400 w-1/3 text-right mr-4">
                    Zipcode:
                  </span>
                  <h1 className="text-2xl font-bold text-gray-600 text-left">
                    {user.address.zipcode}
                  </h1>
                </div>
                <div className="map">
                  <iframe
                    title="map"
                    id="iframeId"
                    src={iFrameData}
                    className="w-full h-96"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h1>No user found with this id</h1>
      )}
    </div>
  );
};

export default Profile;
