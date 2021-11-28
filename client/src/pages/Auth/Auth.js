import { Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import "./Auth.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Auth = () => {
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
  return (
    <div>
      <div className="container">
        <div className="container__forms">
          <div className="form">
            <form action="" className="form__sign-in">
              <h2 className="form__title">Sign In</h2>
              <div className="form__input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form__input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <input className="form__submit" type="submit" value="Login" />
            </form>

            <form action="" className="form__sign-up">
              <h2 className="form__title">Sign Up</h2>
              <div className="form__input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" required />
              </div>
              <div className="form__input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" required />
              </div>
              <div className="form__input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <div className="form__input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div>
                <input
                  className="form__submit_disabled"
                  type="submit"
                  value="Register"
                  disabled
                />
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
