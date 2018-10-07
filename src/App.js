import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './assests/loader.css'

// components
import Login from './components/auth/login/Login'
import StudentLogin from './components/auth/studentLogin/login'
import AdminDashBoard from './components/admin/Dashboard'
import StudentDashboard from './components/student/Dashboard'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={StudentLogin} />
          <Route exact path="/admin" component={Login} />
          <Route path="/admin/dashboard" exact component={AdminDashBoard} />
          <Route path="/student/dashboard" exact component={StudentDashboard} />
        </div>
      </Router>
    )
  }
}
