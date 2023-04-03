import React from "react";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ImFacebook2, ImVimeo2, ImInstagram, ImLinkedin } from "react-icons/im";
import { AiFillCopyrightCircle } from "react-icons/ai";
import shoe from "../assets/images/ftr-shoe.jpg";
import insta from "../assets/images/ftr-insta.jpg";
import shadow from "../assets/images/ftr-shadow.jpg";
import scenery from "../assets/images/ftr-scenery.jpg";
import holi from "../assets/images/ftr-holi.jpg";
import { TfiAngleRight } from "react-icons/tfi";
import visa from "../assets/images/visa.png";
import master from "../assets/images/master.png";
import paypal from "../assets/images/paypal.png";
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </p>

                    <p className="footer_address">
                      198 West 21th Street, Suite 721, New York NY 10010
                      <br />
                      Email: suprema@qodeint.com
                      <br />
                      Phone: +88 (0) 101 0000 000
                      <br />
                      Fax:+88 (0) 202 0000 001
                    </p>
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
              <Col xm={12} md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Latest Post</h5>

                  <div className="footer_content">
                    <p className="footer_para_link">
                      Where Music Is Headed Next
                    </p>
                    <p className="footer_date">February 12, 2016</p>

                    <p className="footer_para_link">
                      Sports Brand New Advertising Campaign
                    </p>
                    <p className="footer_date">February 12, 2016</p>

                    <p className="footer_para_link">
                      Snippets From The Tech Mobile Conference
                    </p>
                    <p className="footer_date">February 12, 2016</p>

                    <p className="footer_para_link">
                      New Music Video Will Blow Your Mind
                    </p>
                    <p className="footer_date">February 12, 2016</p>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Pages</h5>

                  <div className="footer_content footer_page_link">
                    <Row>
                      <Col xs={6}>
                        <div>
                          <NavLink to="/">Home</NavLink>
                          <NavLink to="/about">About</NavLink>
                          <NavLink to="/services">Services</NavLink>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div>
                          <NavLink to="/product">Product</NavLink>
                          <NavLink to="/contact">Contact</NavLink>
                          <NavLink to="/login">Login</NavLink>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Instagram Feed</h5>
                  <div className="footer_content">
                    <ul>
                      <li>
                        <Link to="#shoe">
                          <img src={shoe} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#insta">
                          <img src={insta} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#shadow">
                          <img src={shadow} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#scenery">
                          <img src={scenery} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#holi">
                          <img src={holi} alt="" />
                        </Link>
                      </li>
                    </ul>
                    <hr />

                    <Form>
                      <div className="ftr_email_div">
                        <div className="ftr_subscribe">
                          <label htmlFor="subscribe">
                            Subscribe to our newsletter, get 10% off:
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
