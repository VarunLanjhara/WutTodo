import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainComponent from "../../components/MainComponent/MainComponent";
import { useNavigate } from "react-router-dom";

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
  return (
    <div>
      <Navbar />
      <Sidebar />
      <MainComponent />
    </div>
  );
};

export default Tasks;
