import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsEnvelope, BsFillTelephoneFill, BsMap } from "react-icons/bs";
import "../Css/contact.css";

function Contact() {
  const iconBox = {
    height: "100px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  };

  const iconSize = {
    width: "50px",
    height: "50px",
  };

  //FORM HOOKS
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleInputs = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your name is: ${inputs.name}, email is: ${inputs.email} and message is: ${inputs.text}. We will get in touch with you soon!`
    );
  };

  //SUBMIT BUTTON
  const sumBtn = {
    backgroundColor: "var(--Primary-clr)",
    padding: "1rem 2.5rem",
    border: "none",
    borderRadius: "0.5rem",
    color: "#fff",
    textTransform: "uppercase",
    transition: "all 0.5s",
    boxShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      <section
        className="contact"
        style={{
          backgroundColor: "var(--Background-white)",
          paddingTop: "6rem",
          paddingBottom: "3rem",
          minHeight: "600px",
          width: "100%",
        }}
      >
        <Container className="contact-items">
          <Row>
            <Col
              style={{
                minHeight: "100px",
                backgroundColor: "var(--Background-white)",
                width: "60%",
              }}
            >
              <div className="text-center">
                <h1
                  className="text-center"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    lineHeight: "1.5",
                  }}
                >
                  Get In Touch !
                </h1>
                <p>Contact us for more info and partnership</p>
              </div>
            </Col>
          </Row>
          <Row style={{ width: "50%", margin: "0 auto" }}>
            <Col lg={4} xs={12} style={iconBox}>
              <BsEnvelope style={iconSize} />
              dapo@edemy.com
            </Col>
            <Col lg={4} xs={12} style={iconBox}>
              <BsFillTelephoneFill style={iconSize} />
              +2349030945543
            </Col>
            <Col lg={4} xs={12} style={iconBox}>
              <BsMap style={iconSize} />
              World Wide Web
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={12}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2rem",
                  margin: "2rem auto",
                }}
                className="form-container"
              >
                <div
                  className="form-col1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    height: "150px",
                    padding: ".5rem 0",
                  }}
                >
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name.."
                      required
                      value={inputs.name}
                      onChange={handleInputs}
                    />
                  </label>
                  <label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email.."
                      required
                      value={inputs.email}
                      onChange={handleInputs}
                    />
                  </label>
                </div>
                <div
                  className="form-col2"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <textarea
                    rows="6"
                    cols="40"
                    name="text"
                    placeholder="Type your message here"
                    required
                    value={inputs.text}
                    onChange={handleInputs}
                    style={{
                      width: "100%",
                      height: "150px",
                      border: "2px solid var(--Primary-clr)",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <div className="text-left submit">
                    <input type="submit" style={sumBtn} />
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
