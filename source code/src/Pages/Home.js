import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Outlet, useParams } from "react-router-dom";
import Chatbox from "../Components/Chatbox";

const Home = () => {
  const { id } = useParams();
  return (
    <div className="base">
      <Navbar></Navbar>
      <div className="content">
        <Header id={id}></Header>
        <div className="main h-full">
          <Outlet></Outlet>
        </div>
        <Chatbox></Chatbox>
      </div>
    </div>
  );
};

export default Home;
