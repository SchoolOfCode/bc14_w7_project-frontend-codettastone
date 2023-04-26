import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Alert from 'react-bootstrap/Alert';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'


export default function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return ( //( <Col lg={3} style={{ marginTop: '250px' }}> 
  
    <>
    
      <Button variant="primary" onClick={handleShow} className="sidebar-button">
        Open Quiz Section
      </Button>
      <Offcanvas show={show} onHide={handleClose} className = "offcanvas" responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Quiz</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
      {/* <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Button 2
      </Button> */ }
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Please select your Quiz.</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className = "sidebarbody">
        
        <ul className="list-unstyled mb-0">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        
        </Offcanvas.Body>
      </Offcanvas>
    
    </>
   // </Col>
  );
}