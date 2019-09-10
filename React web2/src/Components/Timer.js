/* This is an example of a stateful component. We make this component stateful instead
of functional because we some of the data (this.state.seconds} associated with this component changes over time.

Because this is a steful component, it must be implemented using a class instead of a function. */

import React from "react";
import "../App.css";

function Footer() {
  return (
    <div>
      {/*---Footer icon section --- */}
      <div className="Footer">
        <a href="https://facebook.com" class="fa fa-facebook" />
        <a href="https://twitter.com" class="fa fa-twitter" />
        <a href="https://linkedin.com" class="fa fa-linkedin" />
        <a href="https://youtube.com" class="fa fa-youtube" />
        <a href="https://instagram.com" class="fa fa-instagram" />
      </div>
    </div>
  );
}

class Timer extends React.Component {
  /*Below is the class constructor. The main function of the constructor is to set the initial state of the component.*/
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div>{Footer()}</div>
        You have been viewing this page for {this.state.seconds} seconds.
      </div>
    );
  }
}

export default Timer;
