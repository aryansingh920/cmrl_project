
import React,{useEffect} from 'react'
import Card from '../Card/Card'
import Card1 from '../Card/Card1'
import CardPassenger from '../Card/CardPassenger'
import Card2 from '../Card/Card2'
import CardStudent from '../Card/CardStudent'
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Redirect = () => {
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
        <body>
            <div id="main">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-lg-6 mt-5 card-1st">
                            <CardPassenger text={"Passenger Feedback"}/>
                        </div>
                        {/* <div className="col-lg-6 mt-5 card-2nd">
                            <CardStudent text={"Training session feedback"}/>
                        </div> */}
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Redirect