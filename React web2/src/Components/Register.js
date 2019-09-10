import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*--- text object heading--- */
const priceHeading = {
  heading1:
    " When it comes to learning it is our priority to make sure that you have a great learning experience",
  heading2:
    "And that's why we make it a point that our prices are very affordable",
  description: "Take a look at our affordable prices below."
};
/*---prices and info objects --- */
const pricesObj = [
  {
    id: "1",
    task_img: "./web-development.jpg",
    task_name: "WEB DEVELOPMENT",
    subject: "HTML, CSS, JavaScript, React.",
    pricerange: "R4300"
  },
  {
    id: "2",
    task_img: "./software-engineering.png",
    task_name: "SOFTWARE ENGINEERING",
    subject: "Python, Java, Object Oriented Programming",
    pricerange: "R5100"
  },
  {
    id: "3",
    task_img: "./data-science.jpg",
    task_name: "DATA SCIENCE",
    subject: "Python, SQL Data, Visualization, Machine Learning.",
    pricerange: "R4700"
  }
];

/*---register section --- */
function Register() {
  const priceList = pricesObj.map(price => (
    <Col className="CardBox">
      {/*--- prices for course elements--- */}
      <Card style={{ width: "60rem" }}>
        <span className="Price">
          <Card.Img
            src={price.task_img}
            variant="left"
            alt="logo"
            width="220"
            height="138"
          />
          {/*--- card text--- */}
          <div style={{ width: "32rem", fontSize: "18px", padding: "30px" }}>
            <Card.Title>{price.task_name}</Card.Title>
            <Card.Text>{price.subject}</Card.Text>
          </div>
          <h3 style={{ color: "red", fontWeight: "bold", padding: "15px" }}>
            {price.pricerange}
            <br /> PER MONTH
          </h3>
        </span>
      </Card>
    </Col>
  ));
  return (
    <div className="regcontainer">
      <div>
        <div className="priceimagebox">
          {/*---top display image for register page--- */}
          <img className="priceimage" src="./price.png" />
        </div>
        <br />
        <h3>Take a look at our affordable prices below.</h3>
        <br />
      </div>
      <Container>
        <Row>{priceList}</Row>
      </Container>
      <p>{priceHeading.heading1}</p>
      <p>{priceHeading.heading2}</p>
    </div>
  );
}

export default Register;
