import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
