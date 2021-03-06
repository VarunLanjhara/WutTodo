import React, { useState, useEffect } from "react";
import "./TodayTaskSearch.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import { get_user_byid } from "../../actions/user";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import SeachResult from "../../components/SearchResult/SeachResult";
import { searchTodayTasks } from "../../actions/todaytasks";

const TodayTaskSearch = () => {
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

  const searchtasks = useSelector((searchtasks) => searchtasks.todaytasks);
  useEffect(() => {
    dispatch(searchTodayTasks(searchshit, userboi ? userboi._id : ""));
  }, [dispatch, searchshit, userboi]);

  return (
    <div>
      <Navbar user={userboi} />
      <Sidebar user={userboi} />
      <SeachResult searchtasks={searchtasks} />
    </div>
  );
};

export default TodayTaskSearch;
