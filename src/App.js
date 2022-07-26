import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Teachers from "./Pages/Teachers";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <>
      <div>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sign-in" element={<SignIn />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
