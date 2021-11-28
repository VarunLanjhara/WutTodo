import React, { useEffect } from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "WutTodo - NotFound";
  });
  const navigate = useNavigate();
  const goback = () => {
    navigate("/");
  };
  return (
    <div class="containerr">
      <div>
        <h1>:(</h1>
        <br />
        <h2>
          A <span>404</span> error occured, Page not found, check the URL and
          try again.
        </h2>
        <br />
        <h3>
          <a onClick={goback}>Return to home</a>
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
