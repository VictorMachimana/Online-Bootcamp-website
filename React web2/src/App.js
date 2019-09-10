import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import Tasks from "./Components/Task";
import Home from "./Components/Home";
import Register from "./Components/Register";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* change const loggedIn to false to change state */

/*---loggedin boolean variable --- */

/*---subject objects --- */

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"
          />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/tasks" exact component={Tasks} />
            <Route path="/about" exact component={About} />
          </Switch>
          <footer>
            <Timer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
