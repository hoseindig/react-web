import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import MainPage from './../components/MainPage';
import loginPage from './../components/loginPage';
import NotFoundPage from './../components/NotFoundPage';
import ProductPage from './../components/ProductPage';
import Product from './../components/Product';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'


const routtes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch >
                <Route path="/" component={MainPage} exact={true} />
                <Route path="/login" component={loginPage} />
                <Route path="/ProductPage" component={ProductPage} />
                <Route path="/Product/:id" component={Product} />
                <Route component={NotFoundPage} />

            </Switch>
            <Footer />

        </div>

    </BrowserRouter>
)

export default routtes;