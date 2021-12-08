import React, { useState, useEffect } from "react";
import "./MainComponentToday.css";
import {
  Avatar,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
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
import {
  createTodayTask,
  deleteTodayTask,
  getTodayTasks,
} from "../../actions/todaytasks";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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

  const [taskData, setTaskData] = useState({
    name: "",
    decsription: "",
  });

  const taskDataboi = {
    name: taskData.name,
    description: taskData.decsription,
    userId: user ? user._id : "",
  };

  const [openalert, setOpenalert] = React.useState(false);

  const handleClickalert = () => {
    setOpenalert(true);
  };

  const handleClosealert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenalert(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClickmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };

  const CreateTask = () => {
    dispatch(createTodayTask(taskDataboi));
    handleClose();
    handleClickalert();
  };

  const DeleteTask = (id) => {
    dispatch(deleteTodayTask(id));
    handleClosemenu();
    console.log(id);
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
                  <p
                    style={{
                      color: "white",
                      fontWeight: "bolder",
                      width: "800px",
                    }}
                  >
                    {task.name}
                  </p>
                  {hover === true ? (
                    <IconButton
                      onClick={handleClickmenu}
                      style={{
                        padding: "0px 0p 0px 0px",
                      }}
                    >
                      <MoreHorizIcon style={{ color: "white" }} />
                    </IconButton>
                  ) : (
                    ""
                  )}
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openmenu}
                    onClose={handleClosemenu}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClosemenu}>
                      <EditOutlinedIcon style={{ marginRight: "5px" }} />
                      Edit Task
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        DeleteTask(task._id);
                      }}
                    >
                      <DeleteOutlineOutlinedIcon
                        style={{ marginRight: "5px" }}
                      />
                      Delete Task
                    </MenuItem>
                  </Menu>
                </div>
                <p
                  style={{
                    color: "gray",
                    fontWeight: "bolder",
                    fontSize: "15px",
                    position: "relative",
                    left: "43px",
                    bottom: "14px",
                    width: "800px",
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
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  name: e.target.value,
                })
              }
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
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  decsription: e.target.value,
                })
              }
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={CreateTask}>Add</Button>
        </DialogActions>
      </Dialog>
      {/* create task alert stuff here */}
      <Snackbar
        open={openalert}
        autoHideDuration={6000}
        onClose={handleClosealert}
      >
        <Alert
          onClose={handleClosealert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Task created succesfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MainComponentToday;
