
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { useAlert } from 'react-alert'
import './css/index.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route } from "react-router-dom"
import Forgotpass from './components/Authcomp/Forgotpass';
import Resetpass from './components/Authcomp/Resetpass';
import { loadUser, clearErrors } from './actions/userAction'
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())

  }, [])

  return (
    <div style={{ height: "100%", minHeight: "100%" }}>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/password/forgot" component={Forgotpass} exact />
      <Route path="/password/reset/:token" component={Resetpass} exact />
    </div>
  )

};
export default App

