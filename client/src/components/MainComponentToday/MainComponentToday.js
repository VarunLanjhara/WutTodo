import React, { useState, useEffect } from "react";
import "./MainComponentToday.css";
import { Avatar, Checkbox, IconButton, TextField } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { getTodayTasks } from "../../actions/todaytasks";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MainComponentToday = ({ user }) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const todaytasks = useSelector((todaytasks) => todaytasks.todaytasks);
  useEffect(() => {
    dispatch(getTodayTasks(user ? user._id : ""));
  }, [dispatch, user]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="MainComponent">
      <div className="topbar">
        <p
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            width: "100px",
          }}
        >
          Today
        </p>
        <p style={{ fontSize: "15px", marginTop: "3px" }}>20 December 2021</p>
      </div>
      <div className="mainstuff">
        {todaytasks
          ? todaytasks.map((task, index) => (
              <div
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                style={{
                  cursor: "pointer",
                  borderBottom: "1px solid gray",
                  width: "900px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    width: "900px",
                  }}
                >
                  <Checkbox
                    style={{
                      color: "white",
                      position: "relative",
                      bottom: "10px",
                    }}
                  />
                  <p style={{ color: "white", fontWeight: "bolder" }}>
                    {task.name}
                  </p>
                  {hover === true ? (
                    <IconButton
                      style={{
                        position: "relative",
                        left: "760px",
                        bottom: "8px",
                      }}
                    >
                      <MoreHorizIcon style={{ color: "white" }} />
                    </IconButton>
                  ) : (
                    ""
                  )}
                </div>
                <p
                  style={{
                    color: "gray",
                    fontWeight: "bolder",
                    fontSize: "15px",
                    position: "relative",
                    left: "43px",
                    bottom: "14px",
                  }}
                >
                  {task.description}
                </p>
              </div>
            ))
          : ""}
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
    </div>
  );
};

export default MainComponentToday;
