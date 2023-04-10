import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  Col,
  Accordion,
  Form,
} from "react-bootstrap";
// import logo from "../assets/images/nav-logo-dark.png";
import IncDecCounter from "../components/IncDecCounter.js";
import { BsHandbag,BsSearch } from "react-icons/bs";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";
import { NavLink } from "react-router-dom";

import cart from "../assets/images/cart-product.jpg";

function NavigationBar({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const search = () => {
    if (searchIsOpen) {
      setSearchIsOpen(true);
    } else {
      setSearchIsOpen(false);
    }
  };

  return (
    <>
      <section>
        <Navbar expand="lg" className="light">
          <Container>
            <Navbar.Brand to="/">
              <h1 className="nav_brand">Logo</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className="me-4 my-2 my-lg-0 nav_anchor "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About Us</NavLink>
                <NavLink to="product">Products</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="blog">Blog</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
              </Nav>
              
              
              <Form className="d-flex position-relative">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  id="serchinput"
                  aria-label="Search"
                />
                <span onClick={search} className="search_icon">
                  <BsSearch/>
                </span>
                <div className="nav_icons d-flex">
                <span onClick={handleShow}>
                  <BsHandbag />
                </span>
              </div>
              </Form>

              <Offcanvas
                placement="end"
                show={show}
                onHide={handleClose}
                {...props}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="cart_div">
                    <Row>
                      <Col xs={12} md={3}>
                        <div>
                          <img src={cart} alt="" className="cart_img" />
                        </div>
                      </Col>
                      <Col xs={12} md={9}>
                        <div className="cart_content">
                          <h5>Audio ProBlack XL</h5>
                          <p>
                            Price: <span>$245.00-$265.00</span>
                          </p>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                Product Detail
                              </Accordion.Header>
                              <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <IncDecCounter />
                        </div>
                      </Col>
                    </Row>
                  </div>
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
