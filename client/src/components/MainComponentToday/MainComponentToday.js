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
  editTodayTask,
  getTodayTasks,
} from "../../actions/todaytasks";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import dateFormat from "dateformat";
import Skeleton from "@mui/material/Skeleton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MainComponentToday = ({ user }) => {
  const now = new Date();
  const [hover, setHover] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [skeleton, setskeleton] = useState(true);

  const dispatch = useDispatch();

  const todaytasks = useSelector((todaytasks) => todaytasks.todaytasks);
  useEffect(() => {
    dispatch(getTodayTasks(user ? user._id : ""));
    setTimeout(() => {
      setskeleton(false);
    }, [2000]);
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

  const [openalertdelete, setOpenalertdelete] = React.useState(false);

  const handleClickalertdelete = () => {
    setOpenalertdelete(true);
  };

  const handleClosealertdelete = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenalertdelete(false);
  };

  const DeleteTask = (id) => {
    dispatch(deleteTodayTask(id, user._id));
    handleClosemenu();
    handleClickalertdelete();
  };

  const [openalertcomplete, setOpenalertcomplete] = React.useState(false);

  const handleClickalertcomplete = () => {
    setOpenalertcomplete(true);
  };

  const handleClosealertcomplete = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenalertcomplete(false);
  };

  const CompleteTask = (id) => {
    dispatch(deleteTodayTask(id, user._id));
    handleClickalertcomplete();
  };

  const [openedit, setOpenedit] = React.useState(false);

  const handleClickOpenedit = () => {
    setOpenedit(true);
  };

  const handleCloseedit = () => {
    setOpenedit(false);
  };

  const editDialog = () => {
    handleClickOpenedit();
    handleClosemenu();
  };

  const [taskDataedit, setTaskDataedit] = useState({
    name: "",
    decsription: "",
    completed: "",
  });

  const [openalertupdate, setOpenalertupdate] = React.useState(false);

  const handleClickalertupdate = () => {
    setOpenalertupdate(true);
  };

  const handleClosealertupdate = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenalertupdate(false);
  };

  const editTask = (id) => {
    dispatch(
      editTodayTask(
        id,
        taskDataedit.name,
        taskDataedit.decsription,
        taskDataedit.completed,
        user._id
      )
    );
    handleCloseedit();
    handleClickalertupdate();
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
        <p style={{ fontSize: "15px", marginTop: "3px" }}>
          {dateFormat(now, "ddd d mmm")}
        </p>
      </div>
      <div className="mainstuff">
        {todaytasks
          ? todaytasks.map((task, index) =>
              skeleton === true ? (
                <Skeleton animation="wave" height={50} width={900} />
              ) : (
                <div
                  key={index}
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
                      onClick={() => {
                        CompleteTask(task._id);
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
                        onClick={(e) => {
                          handleClickmenu(e);
                        }}
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
                      <MenuItem
                        onClick={() => {
                          editDialog();
                        }}
                      >
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
                  {/* edit task dialog */}
                  <Dialog
                    open={openedit}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseedit}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>{"Edit Task"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description">
                        <TextField
                          id="outlined-basic"
                          label="Title"
                          variant="outlined"
                          defaultValue={task.name}
                          style={{
                            width: "500px",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                          onChange={(e) =>
                            setTaskDataedit({
                              ...taskDataedit,
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
                          defaultValue={task.description}
                          style={{
                            width: "500px",
                          }}
                          onChange={(e) =>
                            setTaskDataedit({
                              ...taskDataedit,
                              decsription: e.target.value,
                            })
                          }
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseedit}>Cancel</Button>
                      {taskDataedit.name.length <= 2 ? (
                        <Button disabled>Update</Button>
                      ) : (
                        <Button
                          onClick={() => {
                            editTask(task._id);
                          }}
                        >
                          Update
                        </Button>
                      )}
                    </DialogActions>
                  </Dialog>
                </div>
              )
            )
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
              marginBottom: "20px",
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
          {taskDataboi.name.length <= 2 ? (
            <Button disabled>Add</Button>
          ) : (
            <Button onClick={CreateTask}>Add</Button>
          )}
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
      {/* delete task alert stuff  */}
      <Snackbar
        open={openalertdelete}
        autoHideDuration={6000}
        onClose={handleClosealertdelete}
      >
        <Alert
          onClose={handleClosealertdelete}
          severity="success"
          sx={{ width: "100%" }}
        >
          Task deleted succesfully
        </Alert>
      </Snackbar>
      {/* task complete alert stuff  */}
      <Snackbar
        open={openalertcomplete}
        autoHideDuration={6000}
        onClose={handleClosealertcomplete}
      >
        <Alert
          onClose={handleClosealertcomplete}
          severity="success"
          sx={{ width: "100%" }}
        >
          Task completed
        </Alert>
      </Snackbar>
      {/* task update alert stuff */}
      <Snackbar
        open={openalertupdate}
        autoHideDuration={6000}
        onClose={handleClosealertupdate}
      >
        <Alert
          onClose={handleClosealertupdate}
          severity="success"
          sx={{ width: "100%" }}
        >
          Task updated succesfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MainComponentToday;
