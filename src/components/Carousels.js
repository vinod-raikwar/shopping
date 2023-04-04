import React from "react";
import { Carousel, Row, Col, Container, Nav } from "react-bootstrap";
import sports from "../assets/images/category/sports.avif";
import sneaker from "../assets/images/category/sneaker.avif";
import asseceory from "../assets/images/category/asseceory.avif";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

// import shirt from "../assets/images/shirt-mockup.jpg";
// import rack from "../assets/images/clothing-rack.jpg";
// import kurti from "../assets/images/kurti_shop6.webp";

function Carousels() {
  return (
    <>
      <section className="carousel_top_div">
        <Container>
          <Row>
            <Col>
              <div>
                <h6>Category</h6>

                <h3>Browse Through Our Best Category</h3>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="carousel_div">
          <Carousel>
            <Carousel.Item interval={2000}>
              <Container>
                <Row>
                  <Col sm={6} className="p-0">
                    <div className="carousel_content_img">
                      {/* <img
                        className="carousel_img"
                        src={shirt}
                        alt="First slide"
                      /> */}
                      <div className="carousel_content">
                        <h1>Sports Wear</h1>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nesciunt iure dolore dicta voluptatibus itaque
                          quasi eius cum quisquam error necessitatibus.
                        </p>
                        <div className="carousel_link_div">
                          <Nav.Link className="carousel_link " href="#action1">
                            Read More!
                          </Nav.Link>
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
                    <div className="carousel_content_img">
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
                        <div className="carousel_link_div">
                          <Nav.Link className="carousel_link" href="#action1">
                            Read More!
                          </Nav.Link>
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
                    <div className="carousel_content_img">
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
                        <div className="carousel_link_div">
                          <Nav.Link className="carousel_link" href="#action1">
                            Read More!
                          </Nav.Link>
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
      </section>
    </>
  );
}

export default Carousels;
