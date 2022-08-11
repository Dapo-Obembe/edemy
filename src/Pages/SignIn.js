import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Css/signin.css";

function SignIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleData = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You are welcome, ${data.username}`);
  };

  //SIGN IN PAGE COLUMN 1
  const logCol1 = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
    H1: {
      fontWeight: "600",
      fontSize: "2.3rem",
      marginBottom: "2rem",
      width: "80%",
      margin: "0 auto",
      textAlign: "center",
    },
  };

  const logCol2 = {
    Img: {
      width: "auto",
      height: "400px",
    },
  };
  //SIG IN FORM
  const formSignIn = {
    display: "flex",
    flexDirection: "column",
    gap: "0.9rem",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    width: "80%",
    input: {
      height: "50px",
      borderRadius: "0.5rem",
      width: "100%",
    },
  };
  //LOGIN BUTTON
  const logBtn = {
    backgroundColor: "var(--Primary-clr)",
    padding: "1rem 2.5rem",
    border: "none",
    width: "80%",
    borderRadius: "0.5rem",
    color: "#fff",
    textTransform: "uppercase",
    transition: "all 0.5s",
    boxShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      <section
        className="sign-in"
        style={{
          backgroundColor: "var(--Background-white)",
          paddingTop: "6rem",
          paddingBottom: "3rem",
          minHeight: "600px",
          width: "100%",
        }}
      >
        <Container
          className="sign-in-container"
          style={{ width: "70%", marginTop: "2rem" }}
        >
          <Row>
            <Col lg={6} sm={12} style={logCol1} className="sign-in-col1">
              <h1 style={logCol1.H1}>Sign In to Your Account</h1>
              <div className="sign-in-form">
                <form method="GET" onSubmit={handleSubmit} action="/contact">
                  <div className="sign-in-form" style={formSignIn}>
                    <label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your username.."
                        value={data.username || ""}
                        required
                        onChange={handleData}
                        style={formSignIn.input}
                      />
                    </label>
                    <label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={handleData}
                        style={formSignIn.input}
                      />
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    style={logBtn}
                    className="sign-in-Btn"
                  />
                </form>
                <div className="reg-prompt">
                  <p>
                    Don't have an account? <a href="/sign-up">Sign Up!</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={12} className="sign-in-col2">
              <img
                src="Img/account.png"
                alt="Create account"
                loading="lazy"
                className="img-fluid"
                style={logCol2.Img}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SignIn;
