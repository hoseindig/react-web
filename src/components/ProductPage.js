import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

export default  (prpps) => {
    console.log(prpps)
    return (

        <div className="myBody">
            <div>Product Page</div>
            <div>
                <h1>Product Page</h1>
    
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    )
}