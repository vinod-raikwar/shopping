import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import logo from "../assets/images/nav-logo-dark.png";
import { VscSearch } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";
import { NavLink } from "react-router-dom";

function NavigationBar({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section>
        <Navbar expand="lg" className="light">
          <Container>
            <Navbar.Brand to="/">
              <h2 className="nav_brand">Suprema</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse
              id="navbarScroll"
              className="justify-content-end"
            >
              <Nav
                className="me-4 my-2 my-lg-0 nav_anchor "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="product">Product</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="login">Login</NavLink>
              </Nav>

              <div className="nav_icons">
                <NavLink to="search">
                  <span>
                    <VscSearch />
                  </span>
                </NavLink>

                <span onClick={handleShow} className="humburgur_menu">
                <BsHandbag />
                </span>
              </div>

              <Offcanvas
                placement="end"
                show={show}
                onHide={handleClose}
                {...props}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
}

export default NavigationBar;
