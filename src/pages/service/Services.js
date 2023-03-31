import React from "react";
import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Services() {
  return (
    <>
      <section>
      <div className="contact_bg_img">
          <div className="layer">
            <Container>
              <Row>
                <Col>
                  <div className="content">
                    <h2>Services</h2>
                    <div className="breadcrumb">
                      <span>
                        <Link title="Homepage" to="/home">
                          Home
                        </Link>
                      </span>
                      <span>services</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <div className="text-center mt-5 mb-5">
            <h1 className="service_heading">Our Services</h1>
          </div>
          <Row md={4}>
            <Col md={4}>
              <div className="box">
                <div className="our-services settings">
                  <div className="icon">
                    <img src="https://i.imgur.com/6NKPrhO.png" alt="" />{" "}
                  </div>
                  <h4>Settings</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="box">
                <div className="our-services speedup">
                  <div className="icon">
                    {" "}
                    <img src="https://i.imgur.com/KMbnpFF.png" alt="" />{" "}
                  </div>
                  <h4>Speedup</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="box">
                <div className="our-services privacy">
                  <div className="icon">
                    {" "}
                    <img src="https://i.imgur.com/AgyneKA.png" alt="" />{" "}
                  </div>
                  <h4>Privacy</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="box">
                <div className="our-services backups">
                  <div className="icon">
                    {" "}
                    <img src="https://i.imgur.com/vdH9LKi.png" alt="" />{" "}
                  </div>
                  <h4>Backups</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="box">
                <div className="our-services ssl">
                  <div className="icon">
                    {" "}
                    <img src="https://i.imgur.com/v6OnUqu.png" alt="" />{" "}
                  </div>
                  <h4>SSL secured</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="box">
                <div className="our-services database">
                  <div class="icon">
                    {" "}
                    <img src="https://i.imgur.com/VzjZw9M.png" alt="" />{" "}
                  </div>
                  <h4>Database</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
