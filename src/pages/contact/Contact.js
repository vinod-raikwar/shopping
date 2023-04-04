import React from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section>
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
              <Col xs={12} sm={5}>
                <div className="map mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.03136813648!2d75.88608449999998!3d22.74652725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd584d617663%3A0x7ddfc9619bc0d038!2sIndore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1680612403324!5m2!1sen!2sin"
                    width="480"
                    height="490"
                    style={{ border: "1px solid silver" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="My Location"
                  ></iframe>
                </div>
              </Col>
              <Col xs={12} sm={7}>
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
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
