import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../img/images/brandLogo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect className="navbarWrap" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="brandLogo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <div className="d-flex justify-content-center">
                  <span>Audit Services</span>
                  <i className="align-self-center ms-2 fa-solid fa-angle-down"></i>
                </div>
              </Nav.Link>
              <Nav.Link href="#home">Pricing</Nav.Link>
              <Nav.Link href="#home">Blogs</Nav.Link>
              <Nav.Link href="#home">
                <div className="d-flex justify-content-center">
                  <span>Resources</span>
                  <i className="align-self-center ms-2 fa-solid fa-angle-down"></i>
                </div>
              </Nav.Link>
              <Nav.Link href="#home">
                <button className="navBarButton buttonBackground">
                  Portfolio
                </button>
              </Nav.Link>
              <Nav.Link href="#home">
                <button className="navBarButton buttonBackground">
                  Request An Audit
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
