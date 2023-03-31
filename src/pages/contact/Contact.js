import React from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section >
        <div className="contact_bg_img">
          <div className="layer">
            <Container>
              <Row>
                <Col>
                  <div className="content">
                    <h2>Contact</h2>
                    <div className="breadcrumb">
                      <span>
                        <Link title="Homepage" to="/home">
                          Home
                        </Link>
                      </span>
                      <span>Contact Us</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <div className="contact ps-5 pe-5">
            <Row>
              <Col xs={12}>
                <div className="contact_form">
                  <div className="contact_form_title mt-4">
                    <h2>
                      Contact <strong>Form</strong>
                    </h2>
                  </div>
                  <div className="contact_title_desc mt-4">
                    <p>
                      Feel free to contact us through{" "}
                      <Link classname="ttm-textcolor-skincolor" to="#">
                        Twitter
                      </Link>{" "}
                      or{" "}
                      <Link classname="ttm-textcolor-skincolor" to="#">
                        Facebook
                      </Link>{" "}
                      if you prefer.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="in mt-4">
              <Row>
                <Col md={4}>
                  <div>
                    <Form>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicName"
                      >
                        <Form.Control
                          type="name"
                          placeholder="Your Name"
                          className="form_control"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <Form>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicEmail"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className="form_control"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <Form>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicPhone"
                      >
                        <Form.Control
                          type="number"
                          placeholder="Phone Number"
                          className="form_control"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  {" "}
                  <div>
                    <Form>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicName"
                      >
                        <Form.Control
                          type="name"
                          placeholder="Company Name"
                          required
                          className="form_control"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col md={6}>
                  {" "}
                  <div>
                    <Form>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicName"
                      >
                        <Form.Control
                          type="name"
                          placeholder="Subject"
                          className="form_control"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Comments"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "150px" }}
                      />
                    </FloatingLabel>
                  </div>
                </Col>
                <div className="text-center mt-4 mb-4">
                  <button className="contect_submit_btn" type="submit">
                    Send now!
                  </button>
                </div>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
