import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'

export default function NavBar() {
  return (
<>
<Navbar className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
   <Container>
    <Navbar.Brand href="/">Bee Schmersal</Navbar.Brand>
   
   <Navbar.Toggle aria-controls="navbarNavDropdown" />
   <Navbar.Collapse id="navbarNavDropdown" >
      <Nav className="navbar-nav">

      <NavDropdown title="Portfolio" id="navbarDropdownMenuLink">
              <NavDropdown.Item href="https://slantyard.com/?guest@g.com|guest0" target="_blank">Slantyard</NavDropdown.Item>
              <NavDropdown.Item href="http://squashskate.com" target="_blank">
                Squash Skateshop
              </NavDropdown.Item>

              <NavDropdown.Item href="http://bee.engineer/musicSearch/" target="_blank">
               Music Search
              </NavDropdown.Item>
              <NavDropdown.Item href="http://bee.engineer/weatherapp/" target="_blank">Weather App</NavDropdown.Item>
            
              <NavDropdown.Item href="http://bee.engineer/TodoList/" target="_blank">
                Todo List
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="http://github.com/bee-dmg" target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/beeschmersal/" target="_blank">LinkedIn</Nav.Link>

     
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
  )
}
