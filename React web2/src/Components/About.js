import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const about = [
  {
    id: "1",
    title: "ABOUT",
    description:
      "Tech Square Development is an education company. We’re committed to building the best learning experience for all our students, making Tech Square Development one of the best place for students to learn."
  },
  {
    id: "2",
    title: "OUR VISION",
    description:
      "We are building the education the world needs - the first truly net native education. We take more cues from modern tech innovators in creating an engaging educational experience than we do from the classroom. We are bringing the education that the world deserves."
  }
];

/*---About section function --- */
function About() {
  const myContent = about.map(info => (
    <Col className="About">
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Card.Text>{info.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <div>
      <Container>
        <Row>{myContent}</Row>
      </Container>
    </div>
  );
}

export default About;
