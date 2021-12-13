import React, { useState } from "react";
import "./MainComponent.css";
import CommentIcon from "@mui/icons-material/Comment";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import {
  Avatar,
  Checkbox,
  IconButton,
  InputLabel,
  Select,
  Switch,
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  FacebookShareButton,
  RedditShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProject, updateProject } from "../../actions/project";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MainComponent = ({ project, user }) => {
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

  const [opencomment, setOpencomment] = React.useState(false);

  const handleClickOpencomment = () => {
    setOpencomment(true);
  };

  const handleClosecomment = () => {
    setOpencomment(false);
  };
  const [anchorElshare, setAnchorElshare] = React.useState(null);
  const openshare = Boolean(anchorElshare);
  const handleClickshare = (event) => {
    setAnchorElshare(event.currentTarget);
  };
  const handleCloseshare = () => {
    setAnchorElshare(null);
  };

  const navigate = useNavigate();

  const SHARE_URL = "http://localhost:3000/app/project/";

  const dispatch = useDispatch();

  const DeleteProject = (id) => {
    dispatch(deleteProject(id, user._id));
    handleClosemenu();
    navigate("/app/today");
  };

  const [openeditproject, setOpeneditproject] = React.useState(false);

  const handleClickOpeneditproject = () => {
    setOpeneditproject(true);
  };

  const handleCloseeditproject = () => {
    setOpeneditproject(false);
  };

  const [updateprojectData, setupdateProjectData] = useState({
    name: "",
    color: "",
  });

  const updateData = {
    projectId: project ? project._id : "",
    name: updateprojectData.name,
    color: updateprojectData.color,
    userId: user ? user._id : "",
  };

  const EditProject = () => {
    handleClickOpeneditproject();
    handleClosemenu();
  };

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

  const UpdateProject = () => {
    dispatch(updateProject(updateData));
    handleCloseeditproject();
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
            width: "300px",
          }}
        >
          {project.name}
        </p>
        <div
          className="commenthover"
          style={{
            display: "flex",
            cursor: "pointer",
            position: "relative",
            left: "300px",
          }}
          onClick={handleClickOpencomment}
        >
          <CommentIcon style={{ color: "white" }} />
          <p style={{ fontWeight: "500", marginLeft: "5px" }}>Comments</p>
        </div>
        <div
          onClick={handleClickshare}
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
        <Menu
          id="basic-menu"
          anchorEl={anchorElshare}
          open={openshare}
          onClose={handleCloseshare}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleCloseshare}>
            <RedditShareButton url={`${SHARE_URL + project._id}`}>
              <RedditIcon />
            </RedditShareButton>
          </MenuItem>
          <MenuItem onClick={handleCloseshare}>
            <FacebookShareButton url={`${SHARE_URL + project._id}`}>
              <FacebookIcon />
            </FacebookShareButton>
          </MenuItem>
          <MenuItem onClick={handleCloseshare}>
            <WhatsappShareButton url={`${SHARE_URL + project._id}`}>
              <WhatsappIcon />
            </WhatsappShareButton>
          </MenuItem>
          <MenuItem onClick={handleCloseshare}>
            <TwitterShareButton url={`${SHARE_URL + project._id}`}>
              <TwitterIcon />
            </TwitterShareButton>
          </MenuItem>
        </Menu>
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

      {/* update project dialog */}
      <Dialog
        open={openeditproject}
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
              defaultValue={project.name}
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
              defaultValue={project.color}
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
          <Button onClick={handleCloseeditproject}>Close</Button>
          {updateprojectData.name.length <= 1 ||
          updateprojectData.color === "" ||
          updateprojectData.name.length >= 20 ? (
            <Button disabled>Update</Button>
          ) : (
            <Button onClick={UpdateProject}>Update</Button>
          )}
        </DialogActions>
      </Dialog>

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
        <MenuItem onClick={EditProject}>
          <EditOutlinedIcon style={{ marginRight: "8px" }} />
          Edit project
        </MenuItem>
        <MenuItem onClick={handleClosemenu}>
          <StarBorderOutlinedIcon style={{ marginRight: "8px" }} />
          Add to favourites
        </MenuItem>
        <MenuItem
          onClick={() => {
            DeleteProject(project._id);
          }}
        >
          <DeleteOutlineOutlinedIcon style={{ marginRight: "8px" }} />
          Delete project
        </MenuItem>
      </Menu>

      {/* comment dialog stuff */}
      <Dialog
        open={opencomment}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Comments"}</DialogTitle>
        <CloseOutlinedIcon
          onClick={handleClosecomment}
          style={{
            cursor: "pointer",
            position: "absolute",
            left: "550px",
            top: "17px",
          }}
        />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div
              className="commentsseediv"
              style={{ width: "570px", height: "380px" }}
            >
              <div style={{ width: "570px", height: "180px" }}>
                <div style={{ display: "flex" }}>
                  <Avatar />
                  <p
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      position: "relative",
                      left: "6px",
                      top: "2px",
                      fontSize: "17px",
                    }}
                  >
                    Varun
                  </p>
                  <p
                    style={{
                      marginLeft: "14px",
                      fontSize: "13px",
                      marginTop: "6px",
                    }}
                  >
                    2 hours ago
                  </p>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      marginLeft: "46px",
                      position: "relative",
                      bottom: "9px",
                      color: "black",
                      marginRight: "20px",
                    }}
                  >
                    Haha shit project bruh heheheehehehheheHaha shit project
                    bruh heheheehehehheheHaha shit project bruh heheheehehehhehe
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <Avatar />
                  <p
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      position: "relative",
                      left: "6px",
                      top: "2px",
                      fontSize: "17px",
                    }}
                  >
                    Varun
                  </p>
                  <p
                    style={{
                      marginLeft: "14px",
                      fontSize: "13px",
                      marginTop: "6px",
                    }}
                  >
                    2 hours ago
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      marginLeft: "46px",
                      position: "relative",
                      bottom: "9px",
                      color: "black",
                      marginRight: "20px",
                    }}
                  >
                    Haha shit project bruh heheheehehehheheHaha shit project
                    bruh heheheehehehheheHaha shit project bruh heheheehehehhehe
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bottomstuff"
              style={{
                position: "fixed",
                width: "540px",
                height: "140px",
                border: "1px solid gray",
                top: "400px",
                borderRadius: "10px",
              }}
            >
              <TextField
                id="outlined-basic"
                placeholder="Write a comment"
                variant="outlined"
                style={{ width: "540px", borderRadius: "40px" }}
                rows={2.2}
                multiline
              />
              <Button
                variant="contained"
                style={{
                  marginTop: "7px",
                  marginLeft: "370px",
                  backgroundColor: "#DE4C4A",
                }}
              >
                Add Comment
              </Button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
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
          Project updated successfully :)
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MainComponent;
