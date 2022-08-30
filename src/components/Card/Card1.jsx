import React from 'react'
import './Cards.css'
import './Cards1.css'
import CaptchaC from '../CaptchaC'
import Button from '@mui/material/Button'

const Card = (props) => {
    console.log(props)
    return (
        <div className='demo style-demo'>
            <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
                    <h3 className="uk-card-title">Login/Signup</h3>
                    {/* <img class="qrcode" src = "https://cdn.mos.cms.futurecdn.net/QjVmxuEvLwV9rdr9yBB4Th.jpg" alt="not available" /> */}
                    <p class="msg">Login through your Mobile number or via username and password by selecing the option below.</p>
                    <div className="row">
                        {/* <div className="col-md-6 mobile_button">
                            <Button onClick={()=>{props.toggleBool()}} variant="contained">Admin</Button>
                        </div> */}
                        <div className="col username_button">
                            {/*<Button  variant="outlined">User</Button>*/}
                        </div>
                    </div>
                    {/* <CaptchaC/> */}
                </div>
            </div>
        </div>
    )
}

export default Card