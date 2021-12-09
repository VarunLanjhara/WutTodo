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
import React, { useEffect, useState } from "react";
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
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import {
  createPost,
  deleteProject,
  getPost,
  updateProject,
} from "../../actions/project";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Sidebar = ({ user }) => {
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openupdate, setOpenupdate] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenupdate = () => {
    setOpenupdate(true);
  };

  const handleCloseupdate = () => {
    setOpenupdate(false);
  };

  const [projectData, setProjectData] = useState({
    name: "",
    color: "",
  });

  const [updateprojectData, setupdateProjectData] = useState({
    name: "",
    color: "",
  });

  const databoi = {
    name: projectData.name,
    color: projectData.color,
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

  const projectCreate = () => {
    dispatch(createPost(databoi));
    handleClose();
    handleClickalert();
    setProjectData({
      ...projectData,
      name: "",
      color: "",
    });
  };

  const projects = useSelector((projects) => projects.project);
  useEffect(() => {
    dispatch(getPost(user ? user._id : ""));
  }, [dispatch, user]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClickmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
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

  const DeleteProject = (project) => {
    handleClosemenu();
    dispatch(deleteProject(project._id, user ? user._id : ""));
    handleClickalertdelete();
  };

  const updateData = {
    name: updateprojectData.name,
    color: updateprojectData.color,
    userId: user ? user._id : "",
  };

  const UpdateProject = () => {
    dispatch(updateProject(updateData));
    handleCloseupdate();
  };

  return (
    <div className="Sidebar">
      {window.location.href === "http://localhost:3000/app/today" ? (
        <div
          style={{
            display: "flex",
            position: "relative",
            top: "74px",
            cursor: "pointer",
            padding: "10px",
            backgroundColor: "#77746825",
          }}
          className="todayhover"
        >
          <TodayOutlinedIcon style={{ color: "green", marginRight: "7px" }} />
          <p
            style={{
              color: "white",
              fontWeight: "bolder",
              opacity: "0.87",
            }}
          >
            Today
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            position: "relative",
            top: "74px",
            cursor: "pointer",
            padding: "10px",
          }}
          className="todayhover"
        >
          <TodayOutlinedIcon style={{ color: "green", marginRight: "7px" }} />
          <p
            style={{
              color: "white",
              fontWeight: "bolder",
              opacity: "0.87",
            }}
          >
            Today
          </p>
        </div>
      )}
      {/* project stuff here */}
      <Accordion
        style={{
          position: "relative",
          top: "77px",
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
          {projects
            ? projects.map((project, index) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/app/project/${project._id}`);
                    }}
                    key={index}
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
                        background: project.color,
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
                        width: "150px",
                      }}
                    >
                      {project.name}
                    </Typography>
                    {show === true ? (
                      <IconButton
                        style={{
                          padding: "0px 0px 0px 0px",
                        }}
                        onClick={handleClickmenu}
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
                      // style={{
                      //   marginLeft: "170px",
                      //   marginTop: "130px",
                      // }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleClosemenu();
                          handleClickOpenupdate();
                        }}
                      >
                        <EditOutlinedIcon style={{ marginRight: "8px" }} />
                        Edit project
                      </MenuItem>
                      <MenuItem onClick={handleClosemenu}>
                        <StarBorderOutlinedIcon
                          style={{ marginRight: "8px" }}
                        />
                        Add to favourites
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          DeleteProject(project);
                        }}
                      >
                        <DeleteOutlineOutlinedIcon
                          style={{ marginRight: "8px" }}
                        />
                        Delete project
                      </MenuItem>
                    </Menu>
                  </div>
                );
              })
            : ""}
          <Tooltip title="Add Project" arrow>
            <IconButton
              style={{ marginLeft: "72px" }}
              onClick={handleClickOpen}
            >
              <AddOutlinedIcon style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        </AccordionDetails>
      </Accordion>
      {/* dialog stuff here */}
      <Dialog
        open={openupdate}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Update Project"}</DialogTitle>
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
              value={updateprojectData.name}
              onChange={(e) =>
                setupdateProjectData({
                  ...updateprojectData,
                  name: e.target.value,
                })
              }
            />
            <InputLabel
              id="demo-simple-select-label"
              style={{ width: "400px", marginTop: "20px" }}
            ></InputLabel>
            <Select
              style={{ width: "400px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={updateprojectData.color}
              onChange={(e) =>
                setupdateProjectData({
                  ...updateprojectData,
                  color: e.target.value,
                })
              }
            >
              <MenuItem value={"green"}>Green</MenuItem>
              <MenuItem value={"gray"}>Gray</MenuItem>
              <MenuItem value={"red"}>Red</MenuItem>
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"pink"}>Pink</MenuItem>
              <MenuItem value={"yellow"}>Yellow</MenuItem>
            </Select>
          </DialogContentText>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Switch />
            <h1
              style={{
                fontWeight: "bolder",
                color: "black",
                position: "relative",
                top: "10px",
                fontSize: "17px",
              }}
            >
              Add to favourites
            </h1>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseupdate}>Close</Button>
          {updateprojectData.name.length <= 1 ||
          updateprojectData.color === "" ||
          updateprojectData.name.length >= 20 ? (
            <Button disabled>Update</Button>
          ) : (
            <Button onClick={UpdateProject}>Update</Button>
          )}
        </DialogActions>
      </Dialog>
      {/* update dialogs modal */}
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
              value={projectData.name}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  name: e.target.value,
                })
              }
            />
            <InputLabel
              id="demo-simple-select-label"
              style={{ width: "400px", marginTop: "20px" }}
            ></InputLabel>
            <Select
              style={{ width: "400px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={projectData.color}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  color: e.target.value,
                })
              }
            >
              <MenuItem value={"green"}>Green</MenuItem>
              <MenuItem value={"gray"}>Gray</MenuItem>
              <MenuItem value={"red"}>Red</MenuItem>
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"pink"}>Pink</MenuItem>
              <MenuItem value={"yellow"}>Yellow</MenuItem>
            </Select>
          </DialogContentText>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Switch />
            <h1
              style={{
                fontWeight: "bolder",
                color: "black",
                position: "relative",
                top: "10px",
                fontSize: "17px",
              }}
            >
              Add to favourites
            </h1>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {projectData.name.length <= 1 ||
          projectData.color === "" ||
          projectData.name.length >= 20 ? (
            <Button disabled>Create</Button>
          ) : (
            <Button onClick={projectCreate}>Create</Button>
          )}
        </DialogActions>
      </Dialog>
      {/* create post alert stuff */}
      <Snackbar
        open={openalert}
        autoHideDuration={6000}
        onClose={handleClosealert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleClosealert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Project Created Succesfully
        </Alert>
      </Snackbar>
      {/* delete post alert stuff  */}
      <Snackbar
        open={openalertdelete}
        autoHideDuration={6000}
        onClose={handleClosealertdelete}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleClosealertdelete}
          severity="success"
          sx={{ width: "100%" }}
        >
          Project Deleted Succesfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Sidebar;
