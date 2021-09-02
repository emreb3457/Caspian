
import React, {  useEffect } from 'react'
import { useDispatch  } from 'react-redux';

import './css/index.css';
import ProtectedRoute from './components/route/ProtectedRoute'
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route } from "react-router-dom"
import Forgotpass from './components/Authcomp/Forgotpass';
import Resetpass from './components/Authcomp/Resetpass';
import Panel from "./pages/Panel"
import NewCourse from "./components/NewCourseForm"
import { loadUser } from './actions/userAction'
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())

  }, [])

  return (
    <div >
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/password/forgot" component={Forgotpass} exact />
      <Route path="/password/reset/:token" component={Resetpass} exact />


      <ProtectedRoute path="/panel" isAdmin={true} component={Panel} exact />
      <ProtectedRoute path="/panel/course/new" isAdmin={true} component={NewCourse} exact />
    </div>
  )

};
export default App

