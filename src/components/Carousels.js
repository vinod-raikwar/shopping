import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import sports from "../assets/images/category/sports.avif";
import sneaker from "../assets/images/category/sneaker.avif";
import asseceory from "../assets/images/category/asseceory.avif";
// import shirt_rack from "../assets/images/category/shirt-mockup.jpg";

import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

function Carousels() {
  return (
    <>
      <section>
        <div className="div-bg mrt58 ">
          <Container>
            <Row>
              <Col>
                <div className="main_heading mrt30">
                  <h6>Category</h6>

                  <h3>Browse Through Our Best Category</h3>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="carousel_div mrt30 pb30">
            <Carousel>
              <Carousel.Item interval={2000}>
                <Container>
                  <Row>
                    <Col sm={6} className="p-0">
                      <div className=" bg_img carousel_content_img">
                        {/* <img
                        className="carousel_img"
                        src={shirt_rack}
                        alt="First slide"
                      /> */}
                        <div className="carousel_content">
                          <h1>Sports Wear</h1>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt iure dolore dicta voluptatibus itaque
                            quasi eius cum quisquam error necessitatibus.
                          </p>
                          <div className=" mrt58">
                            <Link to="#/" className="link_btn">
                              View All
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} className="p-0">
                      <div className="carousel_img_div">
                        <img
                          className="carousel_img"
                          src={sports}
                          alt="First slide"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <Container>
                  <Row>
                    <Col sm={6} className="p-0">
                      <div className="bg_img carousel_content_img">
                        {/* <img
                        className="carousel_img"
                        src={rack}
                        alt="First slide"
                      /> */}
                        <div className="carousel_content">
                          <h1>Sneaker Shoe</h1>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt iure dolore dicta voluptatibus itaque
                            quasi eius cum quisquam error necessitatibus.
                          </p>
                          <div className="mrt58">
                            <Link to="#/" className="link_btn">
                              View All
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} className="p-0">
                      <div className="carousel_img_div">
                        <img
                          className="carousel_img"
                          src={sneaker}
                          alt="First slide"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <Container>
                  <Row>
                    <Col sm={6} className="p-0">
                      <div className=" bg_img carousel_content_img">
                        {/* <img
                        className="carousel_img"
                        src={kurti}
                        alt="First slide"
                      /> */}
                        <div className="carousel_content">
                          <h1>Accessories</h1>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt iure dolore dicta voluptatibus itaque
                            quasi eius cum quisquam error necessitatibus.
                          </p>
                          <div className="mrt58">
                            <Link to="#/" className="link_btn">
                              View All
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} className="p-0">
                      <div className="carousel_img_div">
                        <img
                          className="carousel_img"
                          src={asseceory}
                          alt="First slide"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousels;
