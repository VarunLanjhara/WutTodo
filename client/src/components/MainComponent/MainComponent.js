import React from "react";
import "./MainComponent.css";
import CommentIcon from "@mui/icons-material/Comment";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Checkbox, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MainComponent = () => {
  return (
    <div className="MainComponent">
      <div className="topbar">
        <p
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            width: "300px",
          }}
        >
          BlahBlahBlahBlahBlah
        </p>
        <div
          className="commenthover"
          style={{
            display: "flex",
            cursor: "pointer",
            position: "relative",
            left: "300px",
          }}
        >
          <CommentIcon style={{ color: "white" }} />
          <p style={{ fontWeight: "500", marginLeft: "5px" }}>Comments</p>
        </div>
        <div
          className="sharehover"
          style={{
            display: "flex",
            cursor: "pointer",
            position: "relative",
            left: "340px",
          }}
        >
          <PersonAddAltIcon style={{ color: "white" }} />
          <p style={{ fontWeight: "500", marginLeft: "5px" }}>Share</p>
        </div>
        <div style={{ position: "relative", left: "380px", bottom: "14px" }}>
          <IconButton size="large">
            <MoreHorizIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
      <div className="mainstuff">
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            borderBottom: "1px solid gray",
            width: "900px",
            marginBottom: "12px",
          }}
        >
          <Checkbox
            style={{ color: "white", position: "relative", bottom: "10px" }}
          />
          <p>Bruh</p>
        </div>
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            borderBottom: "1px solid gray",
            width: "900px",
            marginBottom: "12px",
          }}
        >
          <Checkbox
            style={{ color: "white", position: "relative", bottom: "10px" }}
          />
          <p>Bruh</p>
        </div>
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            borderBottom: "1px solid gray",
            width: "900px",
            marginBottom: "12px",
          }}
        >
          <Checkbox
            style={{ color: "white", position: "relative", bottom: "10px" }}
          />
          <p>Bruh</p>
        </div>
        <div className="addtaskstuff"></div>
      </div>
    </div>
  );
};

export default MainComponent;
