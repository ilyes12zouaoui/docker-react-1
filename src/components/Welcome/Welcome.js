import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Welcome.css";
const Welcome = () => {
  return (
    <Container
      fluid={true}
      style={{ paddingRight: "0", paddingLeft: "0", paddingTop: "50px" }}
    >
      <Row noGutters={true}>
        <Col xs={12} style={{ minHeight: "500px" }} className="p-4">
          <div>
            <h2
              className="display-4"
              style={{
                //  fontFamily: "Roboto Condensed",
                // fontWeight: "700",
                color: "rgb(216, 27, 67)",
                marginTop: "50px",
                fontSize: "52px"
              }}
            >
              Lass docker
            </h2>
            <hr
              style={{
                backgroundColor: "rgb(216, 27, 67)",
                height: "2px",
                width: "25%",
                margin: "10px auto 10px 2px"
              }}
            />
          </div>
          {/* <div
            style={{
              "margin-top": "30px",
              "margin-bottom": "30px",
              height: "2px",
              color: "rgb(208, 50, 83)" //"#fb0091"
            }}
          >
            <span
              style={{
                "border-style": "solid",
                "border-bottom-width": "2px",
                width: "20px",
                float: "left"
              }}
            ></span>
          </div> */}
          <div
            style={{
              // "font-family": "Roboto",
              "font-weight": "normal",
              "font-style": "normal",
              fontSize: "21px"
              // color: "#f17a7e"
            }}
          >
            tttthis is a test application to learn docker and CI. <br />
            used technologies: docker, react.js, travis CI and AWS.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
