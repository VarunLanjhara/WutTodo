import React, { useEffect, useState } from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { get_user_byid } from "../../actions/user";

const NotFound = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate("/app/today");
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")));
  useEffect(() => {
    if (user) {
      document.title = "WutTodo - Not Found";
    } else {
      navigate("/auth");
    }
  }, [user, navigate]);

  const dispatch = useDispatch();

  let decodedtoken = "";
  user ? (decodedtoken = jwt_decode(user)) : navigate("/auth");

  const currentuser = useSelector((user) => user.user);
  useEffect(() => {
    dispatch(get_user_byid(decodedtoken.id));
  }, [dispatch]);

  const userboi = currentuser.authData;
  return (
    <div class="containerr">
      <Navbar user={userboi} />
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
