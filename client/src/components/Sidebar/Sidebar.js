import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Sidebar = () => {
  const [show, setshow] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            style={{
              display: "flex",
              marginBottom: "9px",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "5px",
            }}
            className="textboi"
            onMouseEnter={() => {
              setshow(true);
            }}
            onMouseLeave={() => {
              setshow(false);
            }}
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
              Welcome Boi
            </Typography>
            {show === true ? (
              <IconButton
                style={{ position: "relative", left: "36px", bottom: "5px" }}
              >
                <MoreHorizIcon style={{ color: "white" }} />
              </IconButton>
            ) : (
              ""
            )}
          </div>
          <Tooltip title="Add Project" arrow>
            <IconButton
              style={{ marginLeft: "60px" }}
              onClick={handleClickOpen}
            >
              <AddOutlinedIcon style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        </AccordionDetails>
      </Accordion>

      {/* dialog stuff here */}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Project"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{
                width: "400px",
                marginTop: "10px",
              }}
            />
            <InputLabel
              id="demo-simple-select-label"
              style={{ width: "400px", marginTop: "20px" }}
              defaultValue={40}
            ></InputLabel>
            <Select
              style={{ width: "400px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Green</MenuItem>
              <MenuItem value={20}>Gray</MenuItem>
              <MenuItem value={30}>Red</MenuItem>
              <MenuItem value={40}>Blue</MenuItem>
              <MenuItem value={50}>Pink</MenuItem>
              <MenuItem value={60}>Yellow</MenuItem>
            </Select>
          </DialogContentText>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Switch />
            <p
              style={{
                fontWeight: "bold",
                color: "black",
                position: "relative",
                top: "10px",
              }}
            >
              Add to favourites
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sidebar;
