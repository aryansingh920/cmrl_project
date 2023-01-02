import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Station.css'
import Button from '@mui/material/Button'
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Station = () => {
    
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
    const [stations,setstation] = useState('')


    return(
        <div>
            {/* <img src="https://images.indianexpress.com/2022/07/chennai-metro.jpeg"></img> */}
            <div>
            <img src="https://chennaimetrorail.org/wp-content/uploads/2021/03/cmrl-banner-53217.png" class="chennaimetro"/>
            </div>
            <h2 class="main">Select Station</h2>
            <select required="required" onChange={(e)=>{setstation(e.target.value)}} class="form-control  main" id="station-from">
                <option value="">
                    - Select -
                </option>
                <option value="General"> 
                    GENERAL
                </option>
                <option value="AG - DMS">
                    AG - DMS
                </option>
                <option value="Airport">
                    Airport
                </option>
                <option value="Anna Nagar East">
                    Anna Nagar East
                </option>
                <option value="Anna Nagar Tower">
                    Anna Nagar Tower
                </option>
                <option value="Arignar Anna Alandur">
                    Arignar Anna Alandur
                </option>
                <option value="Arumbakkam">
                    Arumbakkam
                </option>
                <option value="Ashok Nagar">
                    Ashok Nagar
                </option>
                <option value="Egmore Metro">
                    Egmore Metro
                </option>
                <option value="Ekkattuthangal">
                    Ekkattuthangal
                </option>
                <option value="Government Estate">
                    Government Estate
                </option>
                <option value="Guindy">
                    Guindy
                </option>
                <option value="High Court">
                    High Court
                </option>
                <option value="Kaladipet Metro">
                    Kaladipet Metro
                </option>
                <option value="Kilpauk">
                    Kilpauk
                </option>
                <option value="Koyambedu">
                    Koyambedu
                </option>
                <option value="LIC">
                    LIC
                </option>
                <option value="Little Mount">
                    Little Mount
                </option>
                <option value="Mannadi">
                    Mannadi
                </option>
                <option value="Meenambakkam">
                    Meenambakkam
                </option>
                <option value="Nandanam">
                    Nandanam
                </option>
                <option value="Nanganallur">
                    Nanganallur
                </option>
                <option value="Nehru Park">
                    Nehru Park
                </option>
                <option value="New Washermenpet Metro">
                    New Washermenpet Metro
                </option>
                <option value="Pachaiyappa">
                    Pachaiyappa
                </option>
                <option value="Puratchi Thalaivar Dr.M.G.Ramachandran Central Metro">
                    Puratchi Thalaivar Dr.M.G.Ramachandran Central Metro
                </option>
                <option value="Puratchi Thalaivi Dr.J.Jayalaithaa CMBT Metro">
                    Puratchi Thalaivi Dr.J.Jayalaithaa CMBT Metro
                </option>
                <option value="Saidapet Metro">
                    Saidapet Metro
                </option>
                <option value="Shenoy Nagar">
                    Shenoy Nagar
                </option>
                <option value="St. Thomas Mount">
                    St. Thomas Mount
                </option>
                <option value="Teynampet">
                    Teynampet
                </option>
                <option value="Thirumangalam">
                    Thirumangalam
                </option>
                <option value="Thiruvotriyur Metro">
                    Thiruvotriyur Metro
                </option>
                <option value="Thiruvottriyur Theradi Metro">
                    Thiruvottriyur Theradi Metro
                </option>
                <option value="Thiyagaraya College Metro">
                    Thiyagaraya College Metro
                </option>
                <option value="Thousand Light">
                    Thousand Light
                </option>
                <option value="Tollgate Metro">
                    Tollgate Metro
                </option>
                <option value="Tondiarpet Metro">
                    Tondiarpet Metro
                </option>
                <option value="Vadapalani">
                    Vadapalani
                </option>
                <option value="Washermenpet">
                    Washermenpet
                </option>
                <option value="Wimco Nagar Depot Station">
                    Wimco Nagar Depot Station
                </option>
                <option value="Wimco Nagar Metro">
                    Wimco Nagar Metro
                </option>
            </select>
            <Link to={`/feedback?station=${stations}`}>
                <Button variant="contained">Submit</Button>
            </Link>
        </div>
    )
}
export default Station;