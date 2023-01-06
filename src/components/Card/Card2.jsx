import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import './Cards.css'
// import './Cards1.css'
import "./Card2.css";
import CaptchaC from "../CaptchaC";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
// import navigateHome from "../../App.js";
// import { createHashHistory } from 'history'
import { useCookies } from "react-cookie";
import * as EmailValidator from "email-validator";

const Card2 = props => {
  const [cookies, setCookie] = useCookies(["name"]);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/station");
  };
  // const history = createHashHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [otp, setotp] = useState("");
  const [data1, setData1] = useState("");
  const [msg, setmsg] = useState(false);
  const [otpMsg, setOtpMsg] = useState(true);
  const [err, setErr] = useState(false);
  const [btn, setBtn] = useState(false);
  const call = async () => {
    if (EmailValidator.validate(email)) {
      setmsg(true);
      const response = await axios
        .post("/verify", {
          email: `${email}`
        })
        .then(function(response) {
          setData1(response.data);
          // console.log(response.data);
          return response;
        })
        .catch(function(error) {
          // console.log(error);
          return error;
        });
    } else {
      console.log("invalid email");
      setErr(true);
    }
  };

  function verify_otp() {
    if (otp.length != 6) {
      // console.log("Enter 6 digit OTP");
    } else {
      let text = data1;
      // console.log(data1);
      let result = text.slice(7, 13);
      // console.log(result);
      // console.log(otp);
      if (otp === result) {
        // console.log("success");
        setOtpMsg(false);
        setCookie("logged_in", "true", { path: "/", maxAge: 3600 });
      } else {
        // console.log("failure");
        setOtpMsg(true);
      }
    }
  }
  return (
    <div className="demo style-demo">
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                OTP has been sent
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                aria-label=""
                aria-describedby="button-addon2"
                onChange={e => {
                  setotp(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>*/}

              <button
                onClick={() => {
                  verify_otp();
                }}
                type="button"
                className="btn btn-primary"
              >
                Verify Otp
              </button>
              <Button
                data-bs-dismiss="modal"
                onClick={navigateHome}
                disabled={otpMsg}
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
          <h2>User</h2>
          {/*<h3 className="uk-card-title">Enter Email</h3>*/}
          {/* form page */}
          <form>
            <div className=" justify-content-center">
              <label className="email-main">User Email</label>
              <input
                onChange={e => {
                  setemail(e.target.value);
                  if (EmailValidator.validate(email)) {
                    setBtn(true);
                  } else {
                    setBtn(false);
                  }
                }}
                className="email-main2"
                type="email"
                placeholder="enter email"
              ></input>
              <br />
              {/* <label>Password</label>
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="password"
                type="password"
                placeholder="Password"
              ></input>{" "} */}
              <br />
              {msg && (
                <p className="m-0 p-0" style={{ color: "green" }}>
                  OTP has been sent
                </p>
              )}
              {err && (
                <p className="m-0 p-0" style={{ color: "red" }}>
                  Invalid Email
                </p>
              )}
              <br />
              <div
                style={{ width: "45%", left: "34%", marginTop: "6px" }}
                className="input-group d-flex justify-content-center"
              >
                <div className="otp">
                  {/*<input
                    type="text"
                    className="form-control"
                    placeholder="Enter OTP"
                    aria-label=""
                    aria-describedby="button-addon2"
                    onChange={e => {
                      setotp(e.target.value);
                    }}
                  />*/}
                </div>
                {btn && (
                  <button
                    className="btn btn-outline-secondary send resp-but"
                    type="button"
                    id="button-addon2"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => {
                      call();
                    }}
                  >
                    Send OTP
                  </button>
                )}

                {/*                <button
                  className="btn btn-outline-secondary verify resp-but"
                  type="button"
                  id="button-addon2"
                  onClick={() => {
                    verify_otp();
                  }}
                >
                  Verify OTP
                </button>*/}
              </div>{" "}
              <br />
              <div className="submit">
                {/*                <Button
                  onClick={navigateHome}
                  disabled={otpMsg}
                  variant="contained"
                >
                  Submit
              </Button>*/}
              </div>
            </div>
          </form>
          {/* <CaptchaC/> */}
        </div>
      </div>
    </div>
  );
};

export default Card2;
