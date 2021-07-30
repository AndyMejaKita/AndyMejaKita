import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Car from "../car/car.component.jsx";
import About from "../common/about.component.jsx";


export default function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <CarPage />
            </Route>
            <Route path="/car">
                <CarPage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/">
               <h1>404 pages</h1>
            </Route>
        </Switch>
    </Router>
  );
}

function CarPage() {
    return <Car />;
}

function AboutPage() {
    return <About />;
}