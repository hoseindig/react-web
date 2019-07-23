import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

export default  (props) => {
    console.log(props);
    return (

        <div className="myBody">
            <div>login Page</div>
            <div>
                <input type="text" placeholder="User Name"></input>
                <input type="password" placeholder="password"></input>
                <button>login</button>
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    )
}