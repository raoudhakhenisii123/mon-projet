import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'


class ModalNavbar extends Component{
 
  render(){
return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Dream's Night</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Booking</Nav.Link>
      <Nav.Link href="#pricing">Contact US</Nav.Link>
      <NavDropdown title="Options" id="collasible-nav-dropdown">
      <Link id="NavDropdown.Item" to="/Troops">  
      {/* <NavDropdown.Item href="#action/3.1"> */}
        Troops
        {/* </NavDropdown.Item> */}
        </Link>
        <NavDropdown.Item href="#action/3.2">Wedding Halls</NavDropdown.Item>

        {/* <NavDropdown.Item href="#action/3.3">Decoration</NavDropdown.Item> */}
        <Link id="NavDropdown.Item" to="/Decoration">  
      {/* <NavDropdown.Item href="#action/3.1"> */}
        Decoration
        {/* </NavDropdown.Item> */}
        </Link>
        <NavDropdown.Item href="#action/3.4">cars</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.5">Cakes</NavDropdown.Item> */}
        <Link id="NavDropdown.Item" to="/cakes">
          Cakes
        </Link>
        <NavDropdown.Item href="#action/3.5">Photographer</NavDropdown.Item>
        <NavDropdown.Divider />
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Total</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)}}
export default  ModalNavbar