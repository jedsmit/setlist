import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateSetlist from './pages/CreateSetlist';
import Setlist from './pages/Setlist';
import NoMatch from "./pages/404";
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>

          <Route exact path={["/setlist"]}>
            <Setlist />
          </Route>
          <Route exact path={["/create-setlist"]}>
            <CreateSetlist />
          </Route>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
