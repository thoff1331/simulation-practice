import React from "react";
import { Switch, Route } from "react-router-dom";
import Uk from "./UkCourses";
import Us from "./UsCourses";
import Courses from "./Courses";
import Home from "./Home";

export default (
  <Switch>
    <Route component={Us} path="/UsCourses" />
    <Route component={Uk} path="/UkCourses" />
    <Route exact path="/" component={Home} />
  </Switch>
);
