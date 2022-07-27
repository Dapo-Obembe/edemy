import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Css/footer.css";

function Footer() {
  const colStyle = {
    margin: "1rem 0.3rem",
    padding: "0",
    minHeight: "200px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
  };
  return (
    <>
      <footer
        className="footer"
        style={{
          minHeight: "250px",
          width: "100%",
          margin: "0 auto",
          backgroundColor: "var(--Primary-clr)",
          padding: "1.5rem 0",
        }}
      >
        <Container
          className="footer-items"
          style={{
            width: "75%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row className="justify-content-center">
            <Col lg={3} sm={12} style={colStyle}>
              <h3>e-Demy</h3>
              <ul>
                <li>Download</li>
                <li>Pricing</li>
                <li>Version</li>
                <li>Updates</li>
              </ul>
            </Col>
            <Col lg={3} sm={12} style={colStyle}>
              <h3>Product</h3>
              <ul>
                <li>Solutions</li>
                <li>Trial Period</li>
                <li>Request a Feature</li>
                <li>For Teams</li>
              </ul>
            </Col>
            <Col lg={3} sm={12} style={colStyle}>
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </Col>
            <Col lg={3} sm={12} style={colStyle}>
              <h3>Support</h3>
              <ul>
                <li>Help Center</li>
                <li>Service Center</li>
                <li>Report a Bug</li>
                <li>Join us</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                style={{
                  textAlign: "center",
                  color: "#e5e5e5",
                  marginTop: "2rem",
                }}
              >
                Copyright 2022 <strong>e-Demy</strong>. Developed by{" "}
                <a
                  href="https://dapo-obembe.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  Dapo Obembe
                </a>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
