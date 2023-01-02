import React, { useState} from "react";
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
import { useCookies } from 'react-cookie';
import * as EmailValidator from "email-validator";




const Card2 = (props) => {
  const [cookies, setCookie] = useCookies(['name']);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/redirect');
  };
  // const history = createHashHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [otp, setotp] = useState("");
  const [data1, setData1] = useState("");
  const [msg, setmsg] = useState(false);
  const [otpMsg,setOtpMsg] = useState(true);
  const [err,setErr] = useState(false);



  const call = async () => {
    if(EmailValidator.validate(email)){
    setmsg(true);
    const response = await axios
      .post("/verify", {
        email: `${email}`,
      })
      .then(function (response) {
        setData1(response.data);
        // console.log(response.data);
        return response;
      })
      .catch(function (error) {
        // console.log(error);
        return error;
      });
    }else{
      console.log("invalid email")
      await setErr(true)
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
        setCookie('logged_in', "true", { path: '/' });

      } else {
        // console.log("failure");
        setOtpMsg(true);
      }
    }
  }
  return (
    <div className="demo style-demo">
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
        <h2>User</h2>
          {/*<h3 className="uk-card-title">Enter Email</h3>*/}
          {/* form page */}
          <form>
            <div class=" justify-content-center">
              <label class="email-main">User Email</label>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                class="email-main2"
                type="email"
                placeholder="enter email"
              ></input>
              <br />
              {/* <label>Password</label>
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                class="password"
                type="password"
                placeholder="Password"
              ></input>{" "} */}
              <br />
              {msg && <p className="m-0 p-0" style={{ color: "green" }}>OTP has been sent</p>}
              {err && <p className="m-0 p-0" style={{ color: "red" }}>Invalid Email</p>}
              <br />
              <div
                style={{ width: "45%", left: "34%", marginTop: "6px" }}
                class="input-group d-flex justify-content-center"
              >
              <div class="otp">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter OTP"
                  aria-label=""
                  aria-describedby="button-addon2"
                  onChange={(e) => {
                    setotp(e.target.value);
                  }}
                />
                </div>
                <button
                  class="btn btn-outline-secondary send resp-but"
                  type="button"
                  id="button-addon2"
                  onClick={() => {
                    call();
                  }}
                >
                  Send OTP
                </button>
                <button
                  class="btn btn-outline-secondary verify resp-but"
                  type="button"
                  id="button-addon2"
                  onClick={() => {
                    verify_otp();
                  }}
                >
                  Verify OTP
                </button>
              </div>{" "}
              <br />
              <div className="submit">
                <Button
                  onClick={navigateHome}
                  disabled={otpMsg}
                  variant="contained"
                >
                  Submit
                </Button>
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