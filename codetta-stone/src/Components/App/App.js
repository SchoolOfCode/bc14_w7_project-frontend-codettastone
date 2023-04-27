import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../SideBar/index.js";
import { Col, Row, Container } from "react-bootstrap";
import Quiz from "../Quiz/index.js";
import NavScrollExample from "../Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/index.js";
import Register from "../Register/index.js";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <NavScrollExample />

      {/* Main Content */}
      <div className="container-fluid quiz-container">
        <Row>
          {/* Sidebar */}
          <Col md={3}>
            <Sidebar />
          </Col>

          {/* Quiz Questions */}
          <Col md={9}>
            <Quiz />
          </Col>
        </Row>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
