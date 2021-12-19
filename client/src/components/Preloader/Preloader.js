import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <img
        src="https://c.tenor.com/mc3OyxhLazUAAAAM/doggo-doge.gif"
        alt=""
        style={{
          marginLeft: "520px",
          marginTop: "160px",
          width: "300px",
          height: "300px",
        }}
      />
    </div>
  );
};

export default Preloader;
