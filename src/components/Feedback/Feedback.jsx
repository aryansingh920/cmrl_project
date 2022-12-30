import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feedback.css";
import Button from "@mui/material/Button";
import { selectClasses } from "@mui/material";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [mobile, setmobile] = useState("");
  const [emps, setemps] = useState("");
  const [age, setage] = useState("");
  const [duration, setduration] = useState("");
  const [distance, setdistance] = useState("");
  const [commute, setcommute] = useState("");
  const [service, setservice] = useState("");
  const [cleanliness, setcleanliness] = useState("");
  const [support, setsupport] = useState("");
  const [safety, setsafety] = useState("");
  const [otherSuggestion, setotherSuggestion] = useState("");

  const [cookies, setCookie] = useCookies(["name"]);

  const [msg, setMessage] = useState("");

  // console.log("cookies",cookies.logged_in);
  useEffect(() => {
    setMessage("");
    if (cookies.logged_in === "true") {
    //   console.log("User logged in");
    } else {
      navigate("/");
    }
  }, []);

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("station"));

  const call = async () => {
    // console.log("here")
    if (
      name !== "" &&
      gender !== "" &&
      mobile !== "" &&
      emps !== "" &&
      age !== "" &&
      duration !== "" &&
      distance !== "" &&
      commute !== "" &&
      service !== "" &&
      cleanliness !== "" &&
      support !== "" &&
      cleanliness !== "" &&
      support !== "" &&
      safety !== ""
    ) {
        // console.log("gu")
        const current = new Date()
        const time = String(current.getHours()).padStart(2,0) + ':' + String(current.getMinutes()).padStart(2,0) + ':' + String(current.getSeconds()).padStart(2,0);
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
      const response = axios
        .post("/feedback", {
          // const response = await axios.post('http://localhost:7777/app/feedback', {
          username: name,
          gender: gender,
          mobile: mobile,
          empStatus: emps,
          age: age,
          duration: duration,
          distance: distance,
          commute: commute,
          service: service,
          cleanliness: cleanliness,
          support: support,
          safety: safety,
          otherSuggestion: otherSuggestion,
          date:`${time} - ${date}`,
          station:searchParams.get("station"),
        })
        .then(function (response) {
          console.log(response);
          return response;
        })
        .catch(function (error) {
          console.log(error);

          return error;
        });

        navigate("/thankyou");


      console.log(response);
    }
    else{
        // console.log("hu")

        setMessage("Enter all Fields")
        window.scrollTo(0, 0)
        // console.log("Enter all fields")
    }
  };


  const qus = (
    <div>
    <div class="gender bg-card">
    <label className="b">Employment Status</label>
    <br />
    <input
      onChange={(e) => {
        setemps("Government");
      }}
      type="radio"
      class="size"
      name="emp"
    ></input>
    <label>Government</label>
    <input
      onChange={(e) => {
        setemps("Private");
      }}
      type="radio"
      class="size"
      name="emp"
    ></input>
    <label>Private</label>
    <input
      onChange={(e) => {
        setemps("IT");
      }}
      type="radio"
      class="size"
      name="emp"
    ></input>
    <label>IT</label>
    <input
      onChange={(e) => {
        setemps("Business");
      }}
      type="radio"
      class="size"
      name="emp"
    ></input>
    <label>Business</label>
    <input
      onChange={(e) => {
        setemps("Student");
      }}
      type="radio"
      class="size"
      name="emp"
    ></input>
    <label>Student</label>
    <input
      onChange={(e) => {
        setemps("Others");
      }}
      type="radio"
      class="size"
      name="emp"
    ></input>
    <label>Others</label>
    <br />
  </div>
  <div class="gender bg-card">
    <label className="b">Age Group(in Yrs)</label>
    <br />
    <input
      onChange={(e) => {
        setage("Less than 20");
      }}
      type="radio"
      class="size"
      name="age"
    ></input>
    <label>Less than 20</label>
    <input
      onChange={(e) => {
        setage("20 to 30");
      }}
      type="radio"
      class="size"
      name="age"
    ></input>
    <label>20 to 30</label>
    <input
      onChange={(e) => {
        setage("30 to 40");
      }}
      type="radio"
      class="size"
      name="age"
    ></input>
    <label>30 to 40</label>
    <input
      onChange={(e) => {
        setage("40 to 50");
      }}
      type="radio"
      class="size"
      name="age"
    ></input>
    <label>40 to 50</label>
    <input
      onChange={(e) => {
        setage("50 to 60");
      }}
      type="radio"
      class="size"
      name="age"
    ></input>
    <label>50 to 60</label>
    <input
      onChange={(e) => {
        setage("More than 60");
      }}
      type="radio"
      class="size"
      name="age"
    ></input>
    <label>More than 60</label>
  </div>
  <div class="gender bg-card">
    <label className="b">
      How long you are travelling in CMRL Metro
    </label>{" "}
    <br />
    <input
      onChange={(e) => {
        setduration("Occasional");
      }}
      type="radio"
      class="size"
      name="long"
    ></input>
    <label>Occasional</label>
    <input
      onChange={(e) => {
        setduration("6 months");
      }}
      type="radio"
      class="size"
      name="long"
    ></input>
    <label>6 months</label>
    <input
      onChange={(e) => {
        setduration("1 to 2 years");
      }}
      type="radio"
      class="size"
      name="long"
    ></input>
    <label>1 to 2 years</label>
    <input
      onChange={(e) => {
        setduration("2 to 3 years");
      }}
      type="radio"
      class="size"
      name="long"
    ></input>
    <label>2 to 3 years</label>
    <input
      onChange={(e) => {
        setduration("3 to 4 years");
      }}
      type="radio"
      class="size"
      name="long"
    ></input>
    <label>3 to 4 years</label>
    <input
      onChange={(e) => {
        setduration("More than 4 years");
      }}
      type="radio"
      class="size"
      name="long"
    ></input>
    <label>More than 4 years</label>
    <br />
  </div>
  <div class="gender bg-card">
    <label className="b">
      How far is your residence from Metro station
    </label>{" "}
    <br />
    <input
      onChange={(e) => {
        setdistance("Less than 1 km");
      }}
      type="radio"
      class="size"
      name="residence"
    ></input>
    <label>Less than 1 km</label>
    <input
      onChange={(e) => {
        setdistance("1 to 4 kms");
      }}
      type="radio"
      class="size"
      name="residence"
    ></input>
    <label>1 to 4 kms</label>
    <input
      onChange={(e) => {
        setdistance("4 to 8 kms");
      }}
      type="radio"
      class="size"
      name="residence"
    ></input>
    <label>4 to 8 kms</label>
    <input
      onChange={(e) => {
        setdistance("8 to 12 kms");
      }}
      type="radio"
      class="size"
      name="residence"
    ></input>
    <label>8 to 12 kms</label>
    <input
      onChange={(e) => {
        setdistance("12 to 15 kms");
      }}
      type="radio"
      class="size"
      name="residence"
    ></input>
    <label>12 to 15 kms</label>
    <input
      onChange={(e) => {
        setdistance("More than 15 kms");
      }}
      type="radio"
      class="size"
      name="residence"
    ></input>
    <label>More than 15 kms</label> <br />
  </div>
  <div class="gender bg-card">
    <label className="b">
      How you are commuting to Metro Station
    </label>{" "}
    <br />
    <input
      onChange={(e) => {
        setcommute("CMRL Feeder Services");
      }}
      type="radio"
      class="size"
      name="commute"
    ></input>
    <label>CMRL Feeder Services</label>
    <input
      onChange={(e) => {
        setcommute("Bus");
      }}
      type="radio"
      class="size"
      name="commute"
    ></input>
    <label>Bus</label>
    <input
      onChange={(e) => {
        setcommute("Car");
      }}
      type="radio"
      class="size"
      name="commute"
    ></input>
    <label>Car</label>
    <input
      onChange={(e) => {
        setcommute("Bike");
      }}
      type="radio"
      class="size"
      name="commute"
    ></input>
    <label>Bike</label>
    <input
      onChange={(e) => {
        setcommute("Cycle");
      }}
      type="radio"
      class="size"
      name="commute"
    ></input>
    <label>Cycle</label>
    <input
      onChange={(e) => {
        setcommute("By Walk");
      }}
      type="radio"
      class="size"
      name="commute"
    ></input>
    <label>By Walk</label>
    <br />
  </div>
  <div class="gender bg-card">
    <label className="b">
      What CMRL feeder services you prefer to have more in Metro
      Station
    </label>{" "}
    <br />
    <input
      onChange={(e) => {
        setservice("Mini Bus");
      }}
      type="radio"
      class="size"
      name="service"
    ></input>
    <label>Mini Bus</label>
    <input
      onChange={(e) => {
        setservice("Auto");
      }}
      type="radio"
      class="size"
      name="service"
    ></input>
    <label>Auto</label>
    <input
      onChange={(e) => {
        setservice("Bike Taxi");
      }}
      type="radio"
      class="size"
      name="service"
    ></input>
    <label>Bike Taxi</label>
    <input
      onChange={(e) => {
        setservice("Rented Bikes");
      }}
      type="radio"
      class="size"
      name="service"
    ></input>
    <label>Rented Bikes</label>
    <input
      onChange={(e) => {
        setservice("Rented Cycles");
      }}
      type="radio"
      class="size"
      name="service"
    ></input>
    <label>Rented Cycles</label>
    <input
      onChange={(e) => {
        setservice("CMRL Free Cycles");
      }}
      type="radio"
      class="size"
      name="service"
    ></input>
    <label>CMRL Free Cycles</label>
    <br />
  </div>
  <div class="gender bg-card">
    <label className="b">
      CMRL Metro premises is following 100% cleanliness
    </label>{" "}
    <br />
    <input
      onChange={(e) => {
        setcleanliness("Strongly Agree");
      }}
      type="radio"
      class="size"
      name="clean"
    ></input>
    <label>Strongly Agree</label>
    <input
      onChange={(e) => {
        setcleanliness("Agree");
      }}
      type="radio"
      class="size"
      name="clean"
    ></input>
    <label>Agree</label>
    <input
      onChange={(e) => {
        setcleanliness("Somewhat Agree");
      }}
      type="radio"
      class="size"
      name="clean"
    ></input>
    <label>Somewhat Agree</label>
    <input
      onChange={(e) => {
        setcleanliness("Diagree");
      }}
      type="radio"
      class="size"
      name="clean"
    ></input>
    <label>Disagree</label>
    <input
      onChange={(e) => {
        setcleanliness("Strongly Disagree");
      }}
      type="radio"
      class="size"
      name="clean"
    ></input>
    <label>Strongly Disagree</label>
    <br />
  </div>
  <div class="gender bg-card">
    <label className="b">
      What support do you require to continue travelling in Metro
    </label>{" "}
    <br />
    <input
      onChange={(e) => {
        setsupport("Connectivity to stations");
      }}
      type="radio"
      class="size"
      name="support"
    ></input>
    <label>Connectivity to stations</label>
    <input
      onChange={(e) => {
        setsupport("Signages");
      }}
      type="radio"
      class="size"
      name="support"
    ></input>
    <label>Signages</label>
    <input
      onChange={(e) => {
        setsupport("Parking");
      }}
      type="radio"
      class="size"
      name="support"
    ></input>
    <label>Parking</label>
    <input
      onChange={(e) => {
        setsupport("Facilities");
      }}
      type="radio"
      class="size"
      name="support"
    ></input>
    <label>Facilities</label>
    <input
      onChange={(e) => {
        setsupport("Customer Support");
      }}
      type="radio"
      class="size"
      name="support"
    ></input>
    <label>Customer Support</label>
    <input
      onChange={(e) => {
        setsupport("others");
      }}
      type="radio"
      class="size"
      name="support"
    ></input>
    <label>others</label>
  </div>
  <div class="gender bg-card">
    <label className="b">
      Do you feel Metro is a safe Transport
    </label>{" "}
    <br />
    <input
      onChange={(e) => {
        setsafety("Yes");
      }}
      type="radio"
      class="size"
      name="safe"
    ></input>
    <label>Yes</label>
    <input
      onChange={(e) => {
        setsafety("No");
      }}
      type="radio"
      class="size"
      name="sage"
    ></input>
    <label>No</label>
  </div>
    </div>
  )

  const qus2 = (
    <div>{qus}{qus}</div>
  )




  return (
    <div class="main-container">
      <div className="demo">
        <div>
          <div className="">
            <h3 className="uk-card-title">Commuters Survey</h3>
            <h5>Station : {searchParams.get("station")}</h5>
            {msg && <code style={{fontSize:"2rem"}}>{msg}</code>}
            {/* form page */}
            <form class="form">
              <div class="feedback">
                <div class="name card bg-card">
                  <label className="b">Name</label>
                  <input
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    class="email"
                    type="text"
                    placeholder="Enter your full Name"
                  ></input>
                </div>
                <div class="gender bg-card">
                  <label className="b">Gender</label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={(e) => {
                      setgender("male");
                    }}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={(e) => {
                      setgender("female");
                    }}
                  />
                  <label>Female</label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={(e) => {
                      setgender("other");
                    }}
                  />
                  <label>Other</label>
                </div>
                <div class="name bg-card">
                  <label className="b">Mobile Number</label>
                  <input
                    onChange={(e) => {
                      setmobile(e.target.value);
                    }}
                    class="mobile"
                    type="numeric"
                    placeholder="Enter Mobile number"
                  ></input>
                </div>


                {/* Questions */}


                {searchParams.get("station")==="Airport" || searchParams.get("station")==="LIC" || searchParams.get("station")==="Guindy" ? qus2 : qus }

                {/* Questions */}

                <div class="bg-card">
                  <label className="b">
                    If no, Suggestion for improvement:
                  </label>
                  <textarea
                    onChange={(e) => {
                      setotherSuggestion(e.target.value);
                    }}
                    type="textarea"
                    class="size suggestion"
                    placeholder="Other suggestions if any..."
                  />
                </div>
                <div className="submit">
                  <Button
                    onClick={() => {
                      call();
                    }}
                    class="btn btn-primary button-submit-feedback"
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
    </div>
  );
};
export default Feedback;
