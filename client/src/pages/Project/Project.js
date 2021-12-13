import React, { useState, useEffect } from "react";
import "./Project.css";
import Navbar from "../../components/Navbar/Navbar";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_user_byid } from "../../actions/user";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { getSingleProject } from "../../actions/singleproject";
import MainComponent from "../../components/MainComponent/MainComponent";

const Project = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")));
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  let decodedtoken = "";
  user ? (decodedtoken = jwt_decode(user)) : navigate("/auth");

  const currentuser = useSelector((user) => user.user);
  useEffect(() => {
    dispatch(get_user_byid(decodedtoken.id));
  }, [dispatch]);

  const userboi = currentuser.authData;

  const singleproject = useSelector(
    (singleproject) => singleproject.singleproject
  );
  useEffect(() => {
    dispatch(getSingleProject(params.projectId));
  }, [dispatch, params, user, navigate]);

  useEffect(() => {
    if (user) {
      document.title = singleproject ? singleproject.name : "";
    } else {
      navigate("/auth");
    }
  }, [user, navigate, singleproject]);

  return (
    <div>
      <Navbar user={userboi} />
      <Sidebar user={userboi} />
      <MainComponent project={singleproject} user={userboi} />
    </div>
  );
};

export default Project;
