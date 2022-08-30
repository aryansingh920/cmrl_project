import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page2.css'
import Card from '../Card'
import './Student'

const page2 = () =>{
    return(
        <body>
            <div id="main">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <Card/>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    )
}
export default page2;
