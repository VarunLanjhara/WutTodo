import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainComponent from "../../components/MainComponent/MainComponent";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { get_user_byid } from "../../actions/user";
import MainComponentToday from "../../components/MainComponentToday/MainComponentToday";
import "./Tasks.css";

const Tasks = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")));
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      document.title = "WutTodo - Tasks";
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
    <div>
      <Navbar user={userboi} />
      <Sidebar user={userboi} />
      <MainComponentToday user={userboi} />
    </div>
  );
};

export default Tasks;
