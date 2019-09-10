import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*---intro text object --- */
const intro = {
  description:
    "Become a profesional web developer with our online development program, that takes just 3 - 6 months. We provide support to all our student with the help of our mentors around the clock. Our course is design for complete beginners, so you don't, need to have any programming background to learn. Our course takes a period of 3 to 6 months for both part-time and full-time so you can learn at our own parse. So what are your waiting sign up today, it is never too late to become start your dream career."
};

const tasksObj = [
  {
    id: "1",
    task_img: "./html.png",
    task_name: "HTML & CSS",
    description:
      "Learn to create web pages and make them functional with Html and Style them with CSS"
  },
  {
    id: "2",
    task_img: "./js.png",
    task_name: "JAVASCRIPT & JQUERY",
    description: "change webpage content using javascript, JQuery and React"
  },
  {
    id: "3",
    task_img: "./mongodb.png",
    task_name: "Express & Mongo DB",
    description: "Build web applications using Express and Mongo DB Database"
  }
];

/*---Function to display course subject section --- */
function Tasks() {
  const listTasks = tasksObj.map(task => (
    <Col>
      {/*--- subject cards with icons --- */}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={task.task_img}
          alt="logo"
          width="50"
          height="120"
        />
        <Card.Body>
          <Card.Title>{task.task_name}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <div>
      <div className="Subjects">
        <h3>Learn Web Development and Web Design</h3>
        <h3>Learn from anywhere in the world</h3>
        <br />
        <h4 className="h4">Subjects</h4>
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

export default Tasks;
