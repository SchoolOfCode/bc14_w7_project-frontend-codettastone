// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';
import { NavLink } from 'react-router-dom';


function NavScrollExample() {
  return (
  
    <Navbar bg="custom" expand="lg" className="navbar-custom">
      <Container fluid >
        <Navbar.Brand as={NavLink} to="/">Codetta Stone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" style={{color: "black" }}>HOME </Nav.Link>
            <NavDropdown title="LEARNING RESOURCES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Resource 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Resource 2
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">
                Resource 3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/register">REGISTER</Nav.Link>
            <Nav.Link as={NavLink} to="/login">LOG IN
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-search-bar"
                         aria-label="Search"
              style={{color: "white" }}
            />
            {/* <Button variant="outline-success"
            style={{ backgroundColor: "pink", color: "white" }}
            >Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

 
  );
}

export default NavScrollExample;