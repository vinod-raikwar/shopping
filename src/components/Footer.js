import React from "react";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ImFacebook2, ImVimeo2, ImInstagram, ImLinkedin } from "react-icons/im";
import { AiFillCopyrightCircle } from "react-icons/ai";
import shoe from "../assets/images/footer/ftr-shoe.jpg";
// import insta from "../assets/images/footer/ftr-insta.jpg";
// import shadow from "../assets/images/footer/ftr-shadow.jpg";
// import scenery from "../assets/images/footer/ftr-scenery.jpg";
// import holi from "../assets/images/footer/ftr-holi.jpg";
import { TfiAngleRight } from "react-icons/tfi";
import visa from "../assets/images/footer/visa.png";
import master from "../assets/images/footer/master.png";
import paypal from "../assets/images/footer/paypal.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume, FaFax, FaAddressCard } from "react-icons/fa";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

function Footer() {
  return (
    <>
      <section className="footer_top_div">
        <div className="footer_bg">
          <Container fluid>
            <Row>
              <Col xm={12} md={6} lg={3}>
                <div>
                  <Navbar.Brand to="#home">
                    {/* <img
                      src={logo}
                      className="d-inline-block align-top logo_size"
                      alt="React Bootstrap logo"
                    /> */}
                    <h3 className="ftr_logo">Logo</h3>
                  </Navbar.Brand>
                  <div className="footer_content">
                    <p className="footer_address">
                      <span><FaAddressCard /></span> Our Address <br />
                      TechInfini Solutions Pvt. Ltd.
                      402, Airen Heights, Scheme No. 54, Opposite C21 Mall,Indore, Madhya Pradesh 452010
                      <br />
                      <span><AiOutlineMail /></span> Example@test.com
                      <br />
                      <span><FaPhoneVolume /></span> +91 (0) 101 0000 000
                      <br />
                      <span><FaFax /></span>+91 (0) 202 0000 001
                    </p>

                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Latest Post</h5>
                  <div className="footer_content">
                    <div className="media d-flex">
                      <div className="media-left">
                        <Link to="#/"><img src={shoe} alt="" class="media-object" style={{ width: "60px" }} /></Link>
                      </div>
                      <div className="media-body ps-3">
                        <p className="media-heading">John Doe<p className="footer_date"><small><i>Posted onFebruary 12, 2016 </i></small></p></p>
                        <p>Lorem ipsum...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="page_links">
                  <h5 className="footer_heading ms-5">Page Links</h5>

                  <div className="footer_content footer_page_link">
                    <Row>
                      <Col xs={6}>
                        <div className="ms-5">
                          <NavLink to="/">Home</NavLink>
                          <NavLink to="/product">Product</NavLink>
                          <NavLink to="/services">Services</NavLink>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="">
                          <NavLink to="/about">About Us</NavLink>
                          <NavLink to="/blog">Blog</NavLink>
                          <NavLink to="/contact">Contact Us</NavLink>
                          <NavLink to="/login">Login</NavLink>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Newsletter</h5>
                  <div className="footer_content">
                    <Form>
                      <div className="ftr_email_div">
                        <div className="ftr_subscribe">
                          <label htmlFor="subscribe">
                            Get E-mail updates about our latest shop and special offers.:
                          </label>
                        </div>
                        <div className="ftr_email_div">
                          <input
                            className="ftr_email"
                            type="email"
                            placeholder="E-mail"
                          />
                          <span className="ftr_email_arrow_btn">
                            <TfiAngleRight />
                          </span>
                        </div>
                      </div>
                    </Form>
                    <hr />
                    <h5 className="footer_heading">Follow Us</h5>
                    <Nav className="footer_social_icons">
                      <NavLink to="#">
                        <ImFacebook2 />
                      </NavLink>
                      <NavLink to="#">
                        <ImLinkedin />
                      </NavLink>
                      <NavLink to="#">
                        <ImVimeo2 />
                      </NavLink>
                      <NavLink to="#">
                        <ImInstagram />
                      </NavLink>
                    </Nav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer_bottom">
          <Container fluid>
            <Row>
              <Col sm={6}>
                <div className="footer_bottom_left">
                  <p>
                    <span>
                      <AiFillCopyrightCircle />
                    </span>
                    {new Date().getFullYear()} Suprema India,Inc.All rights reserved.
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="footer_bottom_right">
                  <div className="ftr_debit_cards pe-3">
                    <NavLink to="#">
                      {" "}
                      <img src={visa} alt="debit-cards" />
                    </NavLink>
                  </div>
                  <div className="ftr_debit_cards pt-2 pe-3">
                    <NavLink to="#">
                      <img src={master} alt="debit-cards" />
                    </NavLink>
                  </div>
                  <div className="ftr_debit_cards">
                    <NavLink to="#">
                      <img src={paypal} alt="debit-cards" />
                    </NavLink>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Footer;
