import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ProjectSearch.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_user_byid } from "../../actions/user";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchResultProject from "../../components/SearchResultProject/SearchResultProject";

const ProjectSearch = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      document.title = "WutTodo - SearchResults";
    } else {
      navigate("/auth");
    }
  }, [user, navigate]);
  let decodedtoken = "";
  user ? (decodedtoken = jwt_decode(user)) : navigate("/auth");
  const params = useParams();
  const searchshit = params.searchshit;
  const currentuser = useSelector((user) => user.user);
  useEffect(() => {
    dispatch(get_user_byid(decodedtoken.id));
  }, [dispatch]);
  const userboi = currentuser.authData;
  return (
    <div>
      <Navbar user={userboi} />
      <Sidebar user={userboi} />
      <SearchResultProject />
    </div>
  );
};

export default ProjectSearch;
