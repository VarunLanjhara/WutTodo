import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Accordion
        style={{
          position: "relative",
          top: "64px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            background: "#282828",
            border: "1px solid #282828",
          }}
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            background: "#282828",
          }}
        >
          <div
            style={{ display: "flex", marginBottom: "20px", cursor: "pointer" }}
            className="textboi"
          >
            <div
              style={{
                background: "gray",
                height: "15px",
                width: "15px",
                borderRadius: "200px",
                position: "relative",
                top: "5px",
                marginRight: "10px",
              }}
            ></div>
            <Typography
              style={{
                color: "white",
              }}
            >
              Welcome
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
