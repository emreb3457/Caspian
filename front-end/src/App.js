
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import './css/index.css';
import ProtectedRoute from './components/route/ProtectedRoute'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/Coursedetails";
import { Route, Switch } from "react-router-dom"
import Forgotpass from './components/Authcomp/Forgotpass';
import Resetpass from './components/Authcomp/Resetpass';
import Panel from "./pages/Panel"
import Profile from "./pages/Profile"
import NewCourse from "./components/NewCourseForm"
import page404 from "./components/page404"
import { loadUser } from './actions/userAction'
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())

  }, [])

  return (
    <div style={{ height: "100vw" }}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/password/forgot" component={Forgotpass} exact />
        <Route path="/password/reset/:token" component={Resetpass} exact />

        <Route path="/course/:id" component={Details} />

        <ProtectedRoute path="/profile" component={Profile} exact />
        <ProtectedRoute path="/panel" isAdmin={true} component={Panel} exact />
        <ProtectedRoute path="/panel/course/new" isAdmin={true} component={NewCourse} exact />
        <Route path="/notfound" component={page404} />
        <Route component={page404} />

      </Switch>
    </div>
  )

};
export default App

