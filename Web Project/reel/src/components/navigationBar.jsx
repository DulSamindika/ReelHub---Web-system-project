import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';

function navigationBar() {


  return (
   <>
   {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top" style={{ height: '80px', padding: '0px', marginBottom: 0 }}>
          <Container fluid>
            <Navbar.Brand href="#">ReelHub</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                <span className="nav-link text-danger:hover">
                  <Link className="text-danger:hover" to='/'>Home</Link></span>
                  <Link className="text-danger:hover" to='/communi'><span className="nav-link text-danger:hover">Commiunity</span></Link>
                  <Link className="text-danger:hover" to='/profile'><span className="nav-link text-danger:hover">Profile</span></Link>
                  <Link className="text-danger:hover" to='/jobs'><span className="nav-link text-danger:hover">Jobs</span></Link>
                  <Link className="text-danger:hover" to='/gallery'><span className="nav-link text-danger:hover">Gallery</span></Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
                  <Link to='/Login'>
                  <Button variant="outline-danger" >Login</Button>
                  </Link>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      
    </>
  );
}



export default navigationBar; 