import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function ThankYou() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['name']);
  console.log("cookies",cookies.logged_in);
  useEffect(()=>{
    if(cookies.logged_in === "true") {
        console.log("User logged in")
    }else{
        navigate("/")
    }

} ,[])

  return (
    <div>
        <h3>Thank You for your Feedback</h3>
        <Link onClick={()=>{
        setCookie('logged_in', "false", { path: '/' });
        }} to="/">
            Revisit Home page
        </Link>
    </div>
  )
}

export default ThankYou