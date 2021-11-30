import React, { useState } from "react";
import "./MainComponent.css";
import CommentIcon from "@mui/icons-material/Comment";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Checkbox, IconButton, TextField } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MainComponent = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClickmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };

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
          <IconButton size="large" onClick={handleClickmenu}>
            <MoreHorizIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
      <div className="mainstuff">
        <div
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
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
          {hover === true ? (
            <IconButton
              style={{ position: "relative", left: "760px", bottom: "8px" }}
            >
              <MoreHorizIcon style={{ color: "white" }} />
            </IconButton>
          ) : (
            ""
          )}
        </div>
        <div
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
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
          <p>Bruh 2</p>
          {hover === true ? (
            <IconButton
              style={{ position: "relative", left: "760px", bottom: "8px" }}
            >
              <MoreHorizIcon style={{ color: "white" }} />
            </IconButton>
          ) : (
            ""
          )}
        </div>
        <div
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
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
          <p>Bruh 3</p>
          {hover === true ? (
            <IconButton
              style={{ position: "relative", left: "760px", bottom: "8px" }}
            >
              <MoreHorizIcon style={{ color: "white" }} />
            </IconButton>
          ) : (
            ""
          )}
        </div>
        <div
          className="addtaskstuff"
          style={{ display: "flex", cursor: "pointer" }}
          onClick={() => {
            handleClickOpen();
          }}
        >
          <AddIcon style={{ color: "#de4c4a" }} />
          <p
            style={{
              fontSize: "15px",
              position: "relative",
              top: "3px",
              left: "4px",
              color: "#de4c4a",
            }}
          >
            Add Task
          </p>
        </div>
      </div>

      {/* add task dialog */}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Task"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              style={{
                width: "500px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              rows={4}
              multiline
              style={{
                width: "500px",
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* menu stuff here */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openmenu}
        onClose={handleClosemenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClosemenu}>
          <EditOutlinedIcon style={{ marginRight: "8px" }} />
          Edit project
        </MenuItem>
        <MenuItem onClick={handleClosemenu}>
          <StarBorderOutlinedIcon style={{ marginRight: "8px" }} />
          Add to favourites
        </MenuItem>
        <MenuItem onClick={handleClosemenu}>
          <DeleteOutlineOutlinedIcon style={{ marginRight: "8px" }} />
          Delete project
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MainComponent;
