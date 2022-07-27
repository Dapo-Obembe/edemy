import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Css/home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <Container className="hero-contents">
          <Row>
            <Col lg={6} md={12} className="hero-first-col">
              <div className="hero-texts">
                <h1>There Is a New Way to Learn More...</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  ipsa eos maxime ratione necessitatibus eaque similique rem,
                  velit at quo fuga illo alias pariatur quibusdam neque! Eos
                  totam provident at.
                </p>
              </div>
              <div className="hero-btns">
                <button type="button">Log In</button>
                <button type="button">Sign Up</button>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="hero-image">
                <img
                  src="/Img/Hero-img.png"
                  alt="e-Demy Academy"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about">
        <Container className="about-contents">
          <Row>
            <Col lg={6} md={12} className="about-first-col">
              <img src="/Img/Artist.png" alt="" className="img-fluid" />
            </Col>
            <Col lg={6} md={12} className="about-texts align-items-center">
              <h2>We Know How To Build Your Creativity...</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae rem quam totam voluptas tempore officiis dignissimos
                dolores eius accusamus facilis?
              </p>
              <div className="about-btn">
                <button type="button">Get Started</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="courses">
        <Container className="courses-items">
          <Row>
            <Col
              className="courses-section_title"
              style={{ marginBottom: "3rem" }}
            >
              <h2>Our Offered Courses</h2>
            </Col>
          </Row>
          <Row style={{ marginBottom: "2rem" }}>
            <Col lg={4} sm={12}>
              <div className="course-box">
                <img src="/Img/Chemistry.png" alt="" />
                <p>Chemistry</p>
                <button type="button">Learn More</button>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="course-box">
                <img src="/Img/Music.png" alt="" />
                <p>Music</p>
                <button type="button">Learn More</button>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="course-box">
                <img src="/Img/Health.png" alt="" />
                <p>Pharmacy</p>
                <button type="button">Learn More</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <button type="button" className="btnMore">
                See Full List
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="download" style={{ width: "100%" }}>
        <Container className="download-items">
          <Row>
            <Col lg={6} sm={12} className="download-texts">
              <h2>Download Our App</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                iure alias placeat delectus fugiat incidunt voluptates hic
                obcaecati voluptatibus nihil.
              </p>
              <div className="download-btn">
                <button type="button">Download Now</button>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <img
                src="/Img/Download.png"
                alt="Download app"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
