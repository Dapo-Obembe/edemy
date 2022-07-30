import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Teachers() {
  //PAGE TILE
  const teacherH1 = {
    fontWeight: "700",
    textDecoration: "underline",
    textDecorationColor: "var(--Secondary-clr)",
    textDecorationThickness: "10px",
  };

  //Single Teachers box
  const teacherBox = {
    display: "flex",
    flexDirection: "column",
    gap: ".6rem",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid var(--Primary-clr)",
    boxShadow: "8px 8px 8px 4px rgba(0,0,0,0.2)",
    height: "250px",
    width: "250px",
    margin: "0.8rem auto",
    Img: {
      width: "150px",
      height: "150px",
    },
    Name: {
      fontWeight: "600",
      fontSize: "2rem",
      color: "var(--Primary-clr)",
    },
  };
  return (
    <>
      <section
        className="teachers"
        style={{
          backgroundColor: "var(--Background-white)",
          paddingTop: "6rem",
          paddingBottom: "3rem",
          minHeight: "600px",
          width: "100%",
        }}
      >
        <Container className="teachers-item">
          <Row>
            <Col className="text-center">
              <h1 style={teacherH1}>Our Teachers</h1>
            </Col>
          </Row>
          <Row
            className="all-teachers"
            style={{
              width: "80%",
              margin: "0 auto",
              marginTop: "2rem",
            }}
          >
            <Col lg={4} md={6}>
              <div className="teacher-box" style={teacherBox}>
                <img
                  src="/Img/Anna.png"
                  alt="Teacher Anna"
                  className="img-fluid"
                  style={teacherBox.Img}
                />
                <p style={teacherBox.Name}>Anna</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="teacher-box" style={teacherBox}>
                <img
                  src="/Img/Smith.png"
                  alt="Teacher Anna"
                  className="img-fluid"
                  style={teacherBox.Img}
                />
                <p style={teacherBox.Name}>Anna</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="teacher-box" style={teacherBox}>
                <img
                  src="/Img/Eva.png"
                  alt="Teacher Anna"
                  className="img-fluid"
                  style={teacherBox.Img}
                />
                <p style={teacherBox.Name}>Anna</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" style={{ marginTop: "2rem" }}>
              <button
                type="button"
                style={{
                  padding: ".8rem 2rem",
                  backgroundColor: "var(--Primary-clr)",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: "800",
                  borderRadius: ".5rem",
                }}
              >
                SEE MORE
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Teachers;
