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
import { createPost, getPost } from "../../actions/project";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Sidebar = ({ user }) => {
  const [show, setshow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

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

  const [projectData, setProjectData] = useState({
    name: "",
    color: "",
  });

  const databoi = {
    name: projectData.name,
    color: projectData.color,
    userId: user ? user._id : "",
  };

  const projectCreate = () => {
    dispatch(createPost(databoi));
    handleClose();
  };

  const projects = useSelector((projects) => projects.project);
  useEffect(() => {
    dispatch(getPost(user ? user._id : ""));
  }, [dispatch, user]);

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
          {projects
            ? projects.map((project, index) => {
                return (
                  <div
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
                        style={{
                          position: "relative",
                          left: "36px",
                          bottom: "5px",
                        }}
                        onClick={handleClickmenu}
                        aria-controls="basic-menu"
                      >
                        <MoreHorizIcon style={{ color: "white" }} />
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })
            : ""}
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
          {projectData.name.length <= 1 ||
          projectData.color === "" ||
          projectData.name.length >= 20 ? (
            <Button disabled>Create</Button>
          ) : (
            <Button onClick={projectCreate}>Create</Button>
          )}
        </DialogActions>
      </Dialog>

      {/* project menu stuff */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openmenu}
        onClose={handleClosemenu}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        // transformOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        // style={{
        //   marginTop: "140px",
        //   marginLeft: "180px",
        // }}
      >
        <MenuItem onClick={handleClosemenu}>Profile</MenuItem>
        <MenuItem onClick={handleClosemenu}>My account</MenuItem>
        <MenuItem onClick={handleClosemenu}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Sidebar;
