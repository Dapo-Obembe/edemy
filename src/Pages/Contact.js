import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Css/contact.css";

function Contact() {
  return (
    <>
      <section
        className="contact"
        style={{
          backgroundColor: "var(--Background-white)",
          paddingTop: "6rem",
        }}
      >
        <Container className="contact-items">
          <Row>
            <Col
              style={{
                minHeight: "200px",
                backgroundColor: "var(--Background-white)",
              }}
            >
              <h1
                className="text-center"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                }}
              >
                Contact Us
              </h1>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
