import React from "react";
import { Container, Nav, Col, Row } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import {
  FaPhoneVolume,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

function Top_header() {
  return (
    <>
      <section className=" top-header-container">
        <Container>
          <Row>
            <Col md={9}>
              <div className="top-header-left">
                  <Nav.Link className="vrtcl_line" href="#home">
                    <span>
                      <FaPhoneVolume />
                    </span>
                    +88(0)1010000000
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <span>
                      <TfiEmail/>
                    </span>
                    suprema@qodeinteractive.com
                  </Nav.Link>
              </div>
            </Col>

            <Col md={3}>
              <div className="top-header-right-social-icons">
                {/* <Nav className="justify-content-center"> */}
                  <Nav.Link href="#home">
                    <FaFacebookF />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    <FaTwitter />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    <FaInstagram />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    <FaLinkedinIn />
                  </Nav.Link>
                {/* </Nav> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Top_header;
