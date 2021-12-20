import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Avatar, Tooltip, TextField } from "@mui/material";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { update_profile } from "../../actions/user";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "400px",
    [theme.breakpoints.up("md")]: {
      width: "330px",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const Logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/auth");
  };

  const [updateProfileData, setUpdateProfileData] = useState({
    username: user ? user.username : "",
    email: user ? user.email : "",
    bio: user ? user.bio : "",
    userpfp: user ? user.userpfp : "",
  });

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const accountpopup = () => {
    handleClickOpen();
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        style={{ width: "250px", height: "100px" }}
        onClick={accountpopup}
      >
        <Avatar
          style={{
            position: "absolute",
            left: "20px",
            top: "10px",
          }}
          src={user ? user.userpfp : ""}
        />
        <p
          style={{
            position: "absolute",
            left: "70px",
            top: "-9px",
            fontSize: "19px",
            fontWeight: "bold",
          }}
        >
          {user ? user.username : ""}
        </p>
        <p style={{ position: "absolute", left: "70px" }}>
          {user ? user.email : ""}
        </p>
        <SettingsOutlinedIcon
          style={{ position: "absolute", left: "24px", top: "70px" }}
        />
        <p style={{ position: "absolute", left: "54px", top: "54px" }}>
          Settings
        </p>
      </MenuItem>
      <MenuItem onClick={Logout}>
        <LogoutOutlinedIcon style={{ marginRight: "10px" }} />
        Logout
      </MenuItem>
    </Menu>
  );

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

  const UpdateProfile = () => {
    handleClose();
    handleClickalert();
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge>
            <WhatshotIcon />
          </Badge>
        </IconButton>
        <p>Trending</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Your Stuff</p>
      </MenuItem>
    </Menu>
  );

  const params = useParams();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ background: "#1f1f1f" }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              className="namelogo"
              onClick={() => {
                navigate("/app/today");
              }}
            >
              WutTodo
            </Typography>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                params.projectId
                  ? navigate(`/app/project/search/${searchQuery}`)
                  : navigate(`/app/today/search/${searchQuery}`);
              }}
            >
              <Search style={{ marginLeft: "100px", width: "400px" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Search>
            </form>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Tooltip title={user ? user.username : ""} arrow>
                  <Avatar src={user ? user.userpfp : ""} alt="" />
                </Tooltip>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      {/* dialog stuff here */}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div style={{ display: "flex" }}>
              {updateProfileData.userpfp ? (
                <Avatar
                  style={{ width: "40px", height: "40px" }}
                  src={updateProfileData.userpfp}
                />
              ) : (
                <Avatar
                  style={{ width: "40px", height: "40px" }}
                  src={user ? user.userpfp : ""}
                />
              )}
              <div style={{ marginLeft: "10px", marginTop: "4px" }}>
                <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => {
                    setUpdateProfileData({
                      ...updateProfileData,
                      userpfp: base64,
                    });
                  }}
                ></FileBase64>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: "30px" }}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                style={{ width: "400px" }}
                defaultValue={updateProfileData.username}
                onChange={(e) =>
                  setUpdateProfileData({
                    ...updateProfileData,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div style={{ display: "flex", marginTop: "30px" }}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                style={{ width: "400px" }}
                defaultValue={updateProfileData.email}
                onChange={(e) =>
                  setUpdateProfileData({
                    ...updateProfileData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div style={{ display: "flex", marginTop: "30px" }}>
              <TextField
                id="outlined-basic"
                label="Bio"
                variant="outlined"
                style={{ width: "400px" }}
                rows={4}
                defaultValue={updateProfileData.bio}
                multiline
                onChange={(e) =>
                  setUpdateProfileData({
                    ...updateProfileData,
                    bio: e.target.value,
                  })
                }
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={UpdateProfile}>Update</Button>
          {/* {updateProfileData.username ? (
            updateProfileData.username.length
          ) : "" <= 2 || updateProfileData.email ? (
            updateProfileData.email.includes("@")
          ) : "" || updateProfileData.bio ? (
            updateProfileData.bio.length <= 5
          ) : "" ? (
            <Button disabled>Update</Button>
          ) : (
            
          )} */}
        </DialogActions>
      </Dialog>

      {/* alert here */}

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
          Profile Updated Successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Navbar;
