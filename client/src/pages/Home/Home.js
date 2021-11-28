import React from "react";
import "./Home.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#fff" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#e44232",
                fontSize: "27px",
                marginLeft: "100px",
                cursor: "pointer",
              }}
            >
              WutToDo
            </Typography>
            <Button
              color="primary"
              style={{ marginRight: "20px" }}
              onClick={() => {
                navigate("/auth");
              }}
            >
              Login
            </Button>
            <Button
              color="primary"
              style={{ marginRight: "50px" }}
              onClick={() => {
                navigate("/auth");
              }}
            >
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="imgstuff">
        <h1
          style={{
            position: "absolute",
            left: "450px",
            color: "#1f1f1f",
            zIndex: 20,
            fontSize: "72px",
            top: "80px",
            width: "600px",
            opacity: 0.9,
          }}
        >
          Organize it all with WutToDo
        </h1>
        <Button
          variant="contained"
          style={{
            zIndex: 20,
            position: "absolute",
            left: "610px",
            top: "340px",
            background: "#e44232",
            borderRadius: "10px",
            width: "150px",
            height: "40px",
          }}
        >
          Get Started
        </Button>
        <img
          src="../../images/home.jpg"
          alt=""
          style={{
            width: "1000px",
            height: "540px",
            marginTop: "10px",
            marginLeft: "150px",
            opacity: 0.5,
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
