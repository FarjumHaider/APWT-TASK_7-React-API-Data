
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Head from "./Components/Head";
import AllProduct from "./Components/AllProduct";
import ProductDetail from "./Components/ProductDetail";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Head />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/list">
          <AllProduct />
        </Route>
        <Route exact path="/product/details/:id/:name">
          <ProductDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
