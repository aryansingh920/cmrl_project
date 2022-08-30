import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeedbackStudent.css'
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


const FeedbackStudent= ()=>{
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
    return(
        <div class="main-container">
             <div className='demo'>
                <div>
                <div className="">
                    <h3 className="uk-card-title">Trainers Survey</h3>
                    {/* form page */} 
                    <form class="form">
                    
                    <div class="feedback">
                        <div class="name card bg-card">
                            <label className="b">Name</label>
                            <input class="email input" type="text" placeholder='Enter your full Name'></input>
                        </div>
                        <div class="gender bg-card">
                            <label className="b">Gender</label>
                            <input type='radio' name="gender" /><label>Male</label>
                            <input type='radio' name="gender" /><label>Female</label>
                        </div><br />
                        <div class="name bg-card" >
                            <label className="b">Mobile Number</label>
                            <input class="mobile" type="numeric" placeholder='Enter Mobile number'></input>
                        </div>
                        <div class="gender bg-card">
                            <label className="b">Did your trainer have a thorough grasp of the subject?</label> <br />
                            <input type="radio" class="size something" name="long"></input><label>Excellent</label>
                            <input type="radio" class="size" name="long"></input><label>Good</label>
                            <input type="radio" class="size" name="long"></input><label>Fair</label>
                            <input type="radio" class="size" name="long"></input><label>Poor</label>
                            <input type="radio" class="size" name="long"></input><label>Very Poor</label>
                        </div>
                        <div class="gender bg-card">
                            <label className="b">Did your trainer actively invite questions?</label> <br />
                            <input type="radio" class="size" name="long"></input><label>Excellent</label>
                            <input type="radio" class="size" name="long"></input><label>Good</label>
                            <input type="radio" class="size" name="long"></input><label>Fair</label>
                            <input type="radio" class="size" name="long"></input><label>Poor</label>
                            <input type="radio" class="size" name="long"></input><label>Very Poor</label>
                            
                        </div>
                        <div class="gender bg-card">
                            <label className="b">Was Individual help provided when needed?</label> <br />
                            <input type="radio" class="size" name="long"></input><label>Excellent</label>
                            <input type="radio" class="size" name="long"></input><label>Good</label>
                            <input type="radio" class="size" name="long"></input><label>Fair</label>
                            <input type="radio" class="size" name="long"></input><label>Poor</label>
                            <input type="radio" class="size" name="long"></input><label>Very Poor</label>
                            
                        </div>
                        <div class="gender bg-card">
                            <label className="b">Was the training material and content helpful for you?</label> <br />
                            <input type="radio" class="size" name="long"></input><label>Excellent</label>
                            <input type="radio" class="size" name="long"></input><label>Good</label>
                            <input type="radio" class="size" name="long"></input><label>Fair</label>
                            <input type="radio" class="size" name="long"></input><label>Poor</label>
                            <input type="radio" class="size" name="long"></input><label>Very Poor</label>
                            
                        </div>
                        <div class="gender bg-card">
                            <label className="b">How would you rate the teaching quality of the training?</label> <br />
                            <div class="rate">
                            <h4>Poor</h4>
                            <input type="radio" class="size" name="long"></input><label>0</label>
                            <input type="radio" class="size" name="long"></input><label>1</label>
                            <input type="radio" class="size" name="long"></input><label>2</label>
                            <input type="radio" class="size" name="long"></input><label>3</label>
                            <input type="radio" class="size" name="long"></input><label>4</label>
                            <input type="radio" class="size" name="long"></input><label>5</label>
                            <input type="radio" class="size" name="long"></input><label>6</label>
                            <input type="radio" class="size" name="long"></input><label>7</label>
                            <input type="radio" class="size" name="long"></input><label>8</label>
                            <input type="radio" class="size" name="long"></input><label>9</label>
                            <input type="radio" class="size" name="long"></input><label>10</label>
                            <h4>Excellent</h4>
                            </div>
                        </div>
                        <div class="gender bg-card">
                            <label className="b">How would you rate the training session overall?</label> <br />
                            <div class="rate">
                            <h4>Poor</h4>
                            <input type="radio" class="size" name="long"></input><label>0</label>
                            <input type="radio" class="size" name="long"></input><label>1</label>
                            <input type="radio" class="size" name="long"></input><label>2</label>
                            <input type="radio" class="size" name="long"></input><label>3</label>
                            <input type="radio" class="size" name="long"></input><label>4</label>
                            <input type="radio" class="size" name="long"></input><label>5</label>
                            <input type="radio" class="size" name="long"></input><label>6</label>
                            <input type="radio" class="size" name="long"></input><label>7</label>
                            <input type="radio" class="size" name="long"></input><label>8</label>
                            <input type="radio" class="size" name="long"></input><label>9</label>
                            <input type="radio" class="size" name="long"></input><label>10</label>
                            <h4>Excellent</h4>
                            </div>
                        </div>
                        <div class="input bg-card" >
                            <input type="textarea" class="size suggestion" placeholder="Training session key takeaways..."></input>
                        </div>

                            <div className="submit">
                                <Button class="btn btn-primary button-submit-feedback">Submit</Button>
                            </div>
                        </div>
                    </form>
                    {/* <CaptchaC/> */}
                </div>
            </div>
        </div>
            
        </div>

        //new code
    //     <div class="testbox">
    //   <form action="/">
    //     <h1>Customer Satisfaction Survey</h1>
    //     <p>We use your data for several reasons, from understanding how users engage with our website to publishing content that you read on our website.</p>
    //     <div class="left">
    //       <h4>For how long have you been using our product / service?</h4>
    //       <div class="question-answer">
    //         <label><input type="radio" value="none" name="using" />Less than a month</label>
    //         <label><input type="radio" value="none" name="using" />1-12 months</label>
    //         <label><input type="radio" value="none" name="using" />1-3 years</label>
    //         <label><input type="radio" value="none" name="using" />Over 3 years</label>
    //         <label><input type="radio" value="none" name="using" />Never used</label>
    //       </div>
    //     </div>
    //     <div class="left">
    //       <h4>How often do you use our product / service?</h4>
    //       <div class="question-answer">
    //         <label><input type="radio" value="none" name="product" />Once a week</label>
    //         <label><input type="radio" value="none" name="product" />2 or 3 times a month</label>
    //         <label><input type="radio" value="none" name="product" />Once a month</label>
    //         <label><input type="radio" value="none" name="product" />Less than once a month</label>
    //       </div>
    //     </div>
    //     <div class="left">
    //       <h4>How satisfied are you with the product / service?</h4>
    //       <div class="question-answer">
    //         <label><input type="radio" value="none" name="satisfied" />Very Satisfied</label>
    //         <label><input type="radio" value="none" name="satisfied" />Satisfied</label>
    //         <label><input type="radio" value="none" name="satisfied" />Neutral</label>
    //         <label><input type="radio" value="none" name="satisfied" />Unsatisfied</label>
    //         <label><input type="radio" value="none" name="satisfied" />Very Unsatisfied</label>
    //       </div>
    //     </div>
    //     <div class="left">
    //       <h4>What impressed you most about the product / service ?</h4>
    //       <div class="question-answer">
    //         <label><input type="radio" value="none" name="impressed" />Quality</label>
    //         <label><input type="radio" value="none" name="impressed" />Price</label>
    //         <label><input type="radio" value="none" name="impressed" />Shopping Experience</label>
    //         <label><input type="radio" value="none" name="impressed" />Installation or First Use Experience</label>
    //         <label><input type="radio" value="none" name="impressed" />Usability</label>
    //         <label><input type="radio" value="none" name="impressed" />Customer Service</label>
    //       </div>
    //     </div>
    //     <div class="left">
    //       <h4>What disappointed you most about the product / service ?</h4>
    //       <div class="question-answer">
    //         <label><input type="radio" value="none" name="disappointed" />Quality</label>
    //         <label><input type="radio" value="none" name="disappointed" />Price</label>
    //         <label><input type="radio" value="none" name="disappointed" />Shopping Experience</label>
    //         <label><input type="radio" value="none" name="disappointed" />Installation or First Use Experience</label>
    //         <label><input type="radio" value="none" name="disappointed" />Usability</label>
    //         <label><input type="radio" value="none" name="disappointed" />Customer Service</label>
    //       </div>
    //     </div>
    //     <div class="left">
    //       <h4>What do you like about the product / service?</h4>
    //       <textarea rows="5"></textarea>
    //     </div>
    //     <div class="left">
    //       <h4>What do you like about the product / service?</h4>
    //       <textarea rows="5"></textarea>
    //     </div>
    //     <div class="left">
    //       <h4>Compared to similar products offered by other companies, how do you consider our product?</h4>
    //       <div class="question-answer">
    //         <label><input type="radio" value="none" name="offered" />Much Better</label>
    //         <label><input type="radio" value="none" name="offered" />Somewhat Better</label>
    //         <label><input type="radio" value="none" name="offered" />About the Same</label>
    //         <label><input type="radio" value="none" name="offered" />Somewhat Worse</label>
    //         <label><input type="radio" value="none" name="offered" />Much Worse</label>
    //         <label><input type="radio" value="none" name="offered" />Don't Know</label>
    //       </div>
    //     </div>
    //     <div class="left">
    //       <h4>Would you use our product / service in the future?</h4>
    //       <div class="question-answer">
    //         <label><input type="radio" value="none" name="future" />Definitely</label>
    //         <label><input type="radio" value="none" name="future" />Probably</label>
    //         <label><input type="radio" value="none" name="future" />Not Sure</label>
    //         <label><input type="radio" value="none" name="future" />Probably Not</label>
    //         <label><input type="radio" value="none" name="future" />Definitely Not</label>
    //       </div>
    //     </div>
    //     <div class="left">
    //       <h4>Would you recommend our product / service to other people?</h4>
    //       <div class="question-answer">
    //         <label><input type="radio" value="none" name="recommend" />Definitely</label>
    //         <label><input type="radio" value="none" name="recommend" />Probably</label>
    //         <label><input type="radio" value="none" name="recommend" />Not Sure</label>
    //         <label><input type="radio" value="none" name="recommend" />Probably Not</label>
    //         <label><input type="radio" value="none" name="recommend" />Definitely Not</label>
    //       </div>
    //     </div>
    //     <div class="btn-block">
    //       <button type="submit" href="/">Send Feedback</button>
    //     </div>
    //   </form>
    // </div>
    )
}
export default FeedbackStudent;