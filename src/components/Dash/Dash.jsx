
import React,{useEffect} from 'react'
import Card from '../Card/Card'
import Card1 from '../Card/Card1'
import CardPassenger from '../Card/CardPassenger'
import Card2 from '../Card/Card2'
import CardStudent from '../Card/CardStudent'
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route, useNavigate ,Link} from "react-router-dom";
import { Dropdown } from 'bootstrap'
import axios from 'axios'

const Dash = () => {
const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['name']);
    console.log("cookies",cookies.logged_in);
    useEffect(()=>{
        if(cookies.admin === "true") {
            console.log("User logged in")
        }else{
            navigate("homeadmin")
        }

    } ,[])


    const down = async ()=>{
        const response = await axios
        .get("/getfeedback")
        .then(function (response) {
          console.log(response.data);
          return response;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
        // const response1 = await axios
        // .get("https://young-sierra-93895.herokuapp.com/app/getfeedback/download")
        // .then(function (response) {
        //   console.log(response.data);
        //   return response;
        // })
        // .catch(function (error) {
        //   console.log(error);
        //   return error;
        // });
    }




    return (
        <body>
            <div id="main">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                        {/* <Link to="https://young-sierra-93895.herokuapp.com/app/getfeedback/download" target="_blank" download>Download</Link> */}
                        <div>
            <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5 passenger">
                    <a href="https://safe-cove-64331.herokuapp.com/app/getfeedback/download">
                        <button onClick={down()} type="button" class="btn btn-primary passenger-button">Download the excel</button>
                    </a>

                </div>
            </div>
        </div>

                        </div>
                        <div className="col-lg-6 mt-5">
                            <CardStudent disabled={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Dash