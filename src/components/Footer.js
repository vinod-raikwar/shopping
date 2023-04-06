import React from "react";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ImFacebook2, ImVimeo2, ImInstagram, ImLinkedin } from "react-icons/im";
import { AiFillCopyrightCircle } from "react-icons/ai";
import shoe from "../assets/images/footer/ftr-shoe.jpg";
import insta from "../assets/images/footer/ftr-insta.jpg";
import shadow from "../assets/images/footer/ftr-shadow.jpg";
import { TfiAngleRight } from "react-icons/tfi";
import visa from "../assets/images/footer/visa.png";
import master from "../assets/images/footer/master.png";
import paypal from "../assets/images/footer/paypal.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume, FaFax } from "react-icons/fa";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

function Footer() {
  return (
    <>
      <section>
        <div className="footer_bg mrt58">
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
                    <h3>Logo</h3>
                  </Navbar.Brand>
                  <div className="mrt30">
                    <div className="footer_address">
                      <p>
                        TechInfini Solutions Pvt. Ltd. <br />
                        402,Airen Heights, SchemeNo. 54, <br />
                        Opposite C21 Mall,Indore, <br />
                        Madhya Pradesh 452010.
                      </p>
                      <p>
                        <span>
                          <AiOutlineMail />
                        </span>
                        Example@test.com
                      </p>

                      <p>
                        <span>
                          <FaPhoneVolume />
                        </span>
                        +91 (0) 101 0000 000
                      </p>

                      <p>
                        {" "}
                        <span>
                          <FaFax />
                        </span>
                        +91 (0) 202 0000 001
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Latest Post</h5>
                  <div className="mrt30">
                    <div className="media d-flex">
                      <div className="media-left">
                        <Link to="#/">
                          <img
                            src={shoe}
                            alt=""
                            className="media-object pt-1"
                            style={{ width: "60px" }}
                          />{" "}
                        </Link>
                      </div>
                      <div className="media-body ps-3">
                        <h6 className="media-heading">John Doe </h6>
                        <p className="footer_date">
                          <Link to="#/">
                            <i>Posted onFebruary 12, 2016 </i>
                          </Link>
                          <p>Lorem ipsum dolorsit amet...</p>
                        </p>
                      </div>
                    </div>

                    <div className="media d-flex">
                      <div className="media-left">
                        <Link to="#/">
                          <img
                            src={insta}
                            alt=""
                            className="media-object"
                            style={{ width: "60px" }}
                          />{" "}
                        </Link>
                      </div>
                      <div className="media-body ps-3">
                        <h6 className="media-heading">John Doe </h6>
                        <p className="footer_date">
                          <Link to="#/">
                            <i>Posted onFebruary 12, 2016 </i>
                          </Link>
                          <p>Lorem ipsum dolorsit amet...</p>
                        </p>
                      </div>
                    </div>

                    <div className="media d-flex">
                      <div className="media-left">
                        <Link to="#/">
                          <img
                            src={shadow}
                            alt=""
                            className="media-object"
                            style={{ width: "60px" }}
                          />{" "}
                        </Link>
                      </div>
                      <div className="media-body ps-3">
                        <h6 className="media-heading">John Doe </h6>
                        <p className="footer_date">
                          <Link to="#/">
                            <i>Posted onFebruary 12, 2016 </i>
                          </Link>
                          <p>Lorem ipsum dolorsit amet...</p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="page_links">
                  <h5 className="footer_heading">Location</h5>

                  <div className="mrt30">
                    <div className="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.03136813648!2d75.88608449999998!3d22.74652725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd584d617663%3A0x7ddfc9619bc0d038!2sIndore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1680612403324!5m2!1sen!2sin"
                        width="290"
                        height="230"
                        style={{ border: "1px solid silver" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="My Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Newsletter</h5>
                  <div className="mrt30">
                    <Form>
                      <div className="ftr_email_div">
                        <div className="ftr_subscribe">
                          <label htmlFor="subscribe">
                            Get E-mail updates about our latest shop and special
                            offers.:
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

                    <h5 className="footer_heading mt-4">Follow Us</h5>
                    <Nav className="social-icons footer_social_icons">
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
            <hr />
            <Row>
              <Col xs={12}>
                <div className="footer_page_link">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About Us</NavLink>
                  <NavLink to="/product">Product</NavLink>
                  <NavLink to="/services">Services</NavLink>

                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/contact">Contact Us</NavLink>
                  <NavLink to="/policy">Privacy Policy</NavLink>
                  <NavLink to="/condition">Terms & Condition</NavLink>
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
                    {new Date().getFullYear()} Suprema India,Inc.All rights
                    reserved.
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
