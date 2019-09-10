import React from "react";
import "../App.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*---intro text object --- */
const intro = {
  description:
    "Become a profesional programmer with our online development program, that takes just 3 - 6 months. We provide support to all our student with the help of our mentors around the clock. Our course is design for complete beginners, so you don't, need to have any programming background to learn. Our course takes a period of 3 to 6 months for both part-time and full-time so you can learn at our own parse. So what are you waiting for sign up today, it is never too late to become start your dream career."
};

/*---Object for course categories --- */
const tasksObj = [
  {
    id: "1",
    task_img: "./web-development.jpg",
    task_name: "WEB DEVELOPMENT",
    description:
      "Learn Front-End and Back-End with our Full stack web development program and create dynamic websites",
    subject: "HTML, CSS, JavaScript, React."
  },
  {
    id: "2",
    task_img: "./software-engineering.png",
    task_name: "SOFTWARE ENGINEERING",
    description:
      "Learn  in software development principles, data structures, algorithms and data science.",
    subject: "Python, Java, Object Oriented Programming"
  },
  {
    id: "3",
    task_img: "./data-science.jpg",
    task_name: "DATA SCIENCE",
    description:
      "Learn data science tools and build skill you need to query, analyze and visualize data.",
    subject: "Python, SQL Data, Visualization, Machine Learning."
  }
];

/*---Function to display course subject section --- */
function Programming() {
  const listTasks = tasksObj.map(task => (
    <Col>
      {/*--- subject cards with icons --- */}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={task.task_img}
          alt="logo"
          width="50"
          height="160"
        />
        <Card.Body>
          <Card.Title>{task.task_name}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Card.Text>{task.subject}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <div>
      <div className="Subjects">
        <h3>
          Learn Web Development, Web Design and more with our online programming
          courses
        </h3>
        <h3>Learn at anytime from anywhere in the world</h3>
        <br />
        <h4 className="h4">Courses</h4>
        <br />
      </div>
      <Container className="Tasks">
        <Row>{listTasks}</Row>
      </Container>
      <div className="Intro">
        <p>{intro.description}</p>
      </div>
    </div>
  );
}

/*---About section function --- */

function Home(props) {
  return (
    <div>
      <div className="ShowCase">
        <h1>Welcome</h1>
        <br />
        {/*---showCase image --- */}
        <h3>Looking For Affordable Professional Courses</h3>
        <img
          src="./pic1.jpg"
          alt="logo"
          width="100%"
          height="500"
          padding="0px"
          className="d-inline-block align-top"
        />
        <br />
        <br />
        <h2 className="Subscribe">Register with Tech Square Today</h2>
        <br />
      </div>
      <div className="Subscribe">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Subscribe to our News Feed</Navbar.Brand>
          <Nav className="mr-auto" />
          <Form inline>
            <FormControl
              type="text"
              placeholder="Enter Your Email"
              className="mr-sm-2"
            />
            <Button variant="outline-light">Submit</Button>
          </Form>
        </Navbar>
        <br />
      </div>
      <div>{Programming()}</div>
    </div>
  );
}

export default Home;
/*---Footer icon section --- */
