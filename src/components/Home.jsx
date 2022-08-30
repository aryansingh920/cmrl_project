import React from 'react'
import Card from './Card'

const Home = () => {
    return (
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

export default Home