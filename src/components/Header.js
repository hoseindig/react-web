import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

export default  () => (
    <div className="header">
        <h1>Header</h1>
        <NavLink to="/login" activeClassName="Link-Active">login</NavLink> -
        <NavLink to="/ProductPage" activeClassName="Link-Active">ProductPage</NavLink> -
        <NavLink to="/Product" activeClassName="Link-Active">Product</NavLink> -
        <NavLink to="/" activeClassName="Link-Active" exact={true}>home</NavLink> -
        <hr></hr>
    </div>
)

 