import React from "react";
import "./Login.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
      <section>
        {/* <div className="login_bg_img">
          <h1>My Account</h1>
        </div> */}
         <div className="contact_bg_img">
          <div className="layer">
            <Container>
              <Row>
                <Col>
                  <div className="content">
                    <h2>My Account</h2>
                    <div className="breadcrumb">
                      <span>
                        <Link title="Homepage" to="/home">
                          Home
                        </Link>
                      </span>
                      <span>Account</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="contact_div ">
          <Container>
            <Row>
              <Col>
                <div className="login">
                  <div className="form_div">
                    <h3 className="heading">Login</h3>
                    <Form>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className="form_control"
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="form_control"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 font_size d-flex"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                        <Button
                          variant="light"
                          className="accont_btn"
                          type="submit"
                          size="sm"
                        >
                          Login
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="registration">
                  <div className="form_div">
                    <h3 className="heading">Registration</h3>
                    <Form>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className="form_control"
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="form_control"
                        />
                      </Form.Group>

                      <Button
                        variant="light"
                        className="accont_btn"
                        type="submit"
                        size="sm"
                      >
                        Registration
                      </Button>
                    </Form>
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

export default Login;
