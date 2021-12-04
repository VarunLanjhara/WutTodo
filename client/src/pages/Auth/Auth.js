import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import "./Auth.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDispatch } from "react-redux";
import { login, register } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Auth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")));
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [reloadboi, setreloadboi] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "WutTodo - Login";
    const signInBtn = document.querySelector("#sign-in-btn");
    const signUpBtn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    signUpBtn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
      document.title = "WutTodo - Register";
    });

    signInBtn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
      document.title = "WutTodo - Login";
    });
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/app/today");
    } else {
      document.title = "WutTodo - Login";
    }
  }, [user, navigate]);

  const Login = (e) => {
    setreloadboi(true);
    e.preventDefault();
    dispatch(login(loginData, navigate));
  };

  const Register = (e) => {
    setreloadboi(true);
    e.preventDefault();
    dispatch(register(registerData, navigate));
  };
  return (
    <div>
      <div className="container">
        <div className="container__forms">
          <div className="form">
            <form action="" className="form__sign-in" onSubmit={Login}>
              <h2 className="form__title">Sign In</h2>
              <div className="form__input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
              <div className="form__input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
              {reloadboi ? (
                <CircularProgress />
              ) : (
                <input className="form__submit" type="submit" value="Login" />
              )}
            </form>

            <form className="form__sign-up" onSubmit={Register}>
              <h2 className="form__title">Sign Up</h2>
              <div className="form__input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  required
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      username: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form__input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form__input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form__input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      confirmpassword: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                {registerData.username.length >= 3 &&
                registerData.username.length <= 16 &&
                registerData.password.length >= 8 &&
                registerData.password === registerData.confirmpassword ? (
                  reloadboi ? (
                    <CircularProgress />
                  ) : (
                    <input
                      className="form__submit"
                      type="submit"
                      value="Register"
                    />
                  )
                ) : (
                  <input
                    className="form__submit_disabled"
                    type="submit"
                    value="Register"
                    disabled
                  />
                )}
                <Tooltip
                  title="NOTE: username length must be greater than 3 letters and smoler than 16 letters,email should be valid and both password should match and must be greater than 8 letters"
                  arrow
                >
                  <InfoOutlinedIcon
                    color="action"
                    style={{
                      position: "relative",
                      top: "10px",
                      left: "20px",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </div>{" "}
            </form>
          </div>
        </div>
        <div className="container__panels">
          <div className="panel panel__left">
            <div className="panel__content">
              <h3 className="panel__title">New here ?</h3>
              <p className="panel__paragraph">
                Are you new here go sign up else (　-_･) ︻デ═一
              </p>
              <button className="btn btn-transparent" id="sign-up-btn">
                Register
              </button>
            </div>
            <img
              className="panel__image"
              src="https://stories.freepiklabs.com/storage/11588/market-launch-amico-2628.png"
              alt=""
            />
          </div>
          <div className="panel panel__right">
            <div className="panel__content">
              <h3 className="panel__title">One of us ?</h3>
              <p className="panel__paragraph">
                Are you one of us go sign in else (　-_･) ︻デ═一
              </p>
              <button className="btn btn-transparent" id="sign-in-btn">
                Sign In
              </button>
            </div>
            <img
              className="panel__image"
              src="https://www.pngkey.com/png/full/444-4444270_ia-press-play-website.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
