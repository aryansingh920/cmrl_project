import React, { useState } from "react";
import "./Cards.css";
import CaptchaC from "../CaptchaC";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useCookies } from 'react-cookie';

const Card = () => {
  const [cookies, setCookie] = useCookies(['name']);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg,setmsg] = useState("");

  const navigate = useNavigate();

  const callBack = async () => {

    const result = await axios
      .post("/admin", { email: email, password: password })
      .then((res) => {
        if(res.data === "Authenticated"){
        setCookie('admin', "true", { path: '/' });
        navigate("/admin")
    }else if(res.data === "Wrong Password"){
        setmsg("Wrong Password")
    }else if(res.data === "Email not there in DB"){
        setmsg("Wrong Email")
    }
        // return res;
      })
      .catch((err) => {

        return err;
      });

    //   console.log(result);
  };

  return (
    <div>
      <div>
        <div
          style={{ textAlign: "center" }}
          className="uk-card uk-card-default uk-card-hover uk-card-body p-5 "
        >
          <h2>Admin</h2>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            class="mobile"
            type="text"
            placeholder="Enter email"
          ></input>
          <br />
          <label class="otp1">Password</label>
          <input
            class="otp"
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Enter the password"
          ></input>
          <p>{msg}</p>
            {<div className=" mobile_button">
              <Button onClick={() => callBack()}variant="contained">Sign in</Button>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
