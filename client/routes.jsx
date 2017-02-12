import React from "react";
import {Router, Route} from "react-router";
import Home from "./components/home";
import Jobs from "./containers/Jobs"
import Scheduler from "./containers/Scheduler"


export const routes = (
  <Route path="/" component={Home}>
    <Route path="/scheduler" component={Scheduler}/>
    <Route path="/jobs" component={Jobs}/>
  </Route>
);
