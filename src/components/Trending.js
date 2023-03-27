import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import postBag from "../assets/images/postBag.jpg";
import trending from "../assets/images/trending.jpg";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

function Trending() {
  return (
    <>
      {/* ***********Trending Section Start************ */}

      <section className="trending_top_div">
        <Container>
          <Row>
            <Col md={4}>
              <div className="trending_content_div">
                <div className="head_content">
                  <h4>Featured</h4>
                </div>

                <div className="media d-flex mt-4">
                  <div className="media-left">
                    <img src={postBag} alt="" className="media-object" />
                  </div>
                  <div className="media-body ms-4">
                    <h6 className="media-heading">White x Black Backpack</h6>

                    <Nav className="media-link">
                      <Nav.Link href="#features">Accessories,</Nav.Link>
                      <Nav.Link href="#pricing">Men,</Nav.Link>
                      <Nav.Link href="#pricing">Sportwear</Nav.Link>
                    </Nav>
                  </div>
                </div>

                <div className="media d-flex mt-3">
                  <div className="media-left">
                    <img src={postBag} alt="" className="media-object" />
                  </div>
                  <div className="media-body ms-4">
                    <h6 className="media-heading">White x Black Backpack</h6>

                    <Nav className="media-link">
                      <Nav.Link href="#features">Accessories,</Nav.Link>
                      <Nav.Link href="#pricing">Men,</Nav.Link>
                      <Nav.Link href="#pricing">Sportwear</Nav.Link>
                    </Nav>
                  </div>
                </div>

                <div className="media d-flex mt-3">
                  <div className="media-left">
                    <img src={postBag} alt="" className="media-object" />
                  </div>
                  <div className="media-body ms-4">
                    <h6 className="media-heading">White x Black Backpack</h6>

                    <Nav className="media-link">
                      <Nav.Link href="#features">Accessories,</Nav.Link>
                      <Nav.Link href="#pricing">Men,</Nav.Link>
                      <Nav.Link href="#pricing">Sportwear</Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="trending_content_div">
                <div className="head_content">
                  <h4>Sale</h4>
                </div>

                <div className="media d-flex mt-4">
                  <div className="media-left">
                    <img src={postBag} alt="" className="media-object" />
                  </div>
                  <div className="media-body ms-4">
                    <h6 className="media-heading">White x Black Backpack</h6>

                    <Nav className="media-link">
                      <Nav.Link href="#features">Accessories,</Nav.Link>
                      <Nav.Link href="#pricing">Men,</Nav.Link>
                      <Nav.Link href="#pricing">Sportwear</Nav.Link>
                    </Nav>
                  </div>
                </div>

                <div className="media d-flex mt-3">
                  <div className="media-left">
                    <img src={postBag} alt="" className="media-object" />
                  </div>
                  <div className="media-body ms-4">
                    <h6 className="media-heading">White x Black Backpack</h6>

                    <Nav className="media-link">
                      <Nav.Link href="#features">Accessories,</Nav.Link>
                      <Nav.Link href="#pricing">Men,</Nav.Link>
                      <Nav.Link href="#pricing">Sportwear</Nav.Link>
                    </Nav>
                  </div>
                </div>

                <div className="media d-flex mt-3">
                  <div className="media-left">
                    <img src={postBag} alt="" className="media-object" />
                  </div>
                  <div className="media-body ms-4">
                    <h6 className="media-heading">White x Black Backpack</h6>

                    <Nav className="media-link">
                      <Nav.Link href="#features">Accessories,</Nav.Link>
                      <Nav.Link href="#pricing">Men,</Nav.Link>
                      <Nav.Link href="#pricing">Sportwear</Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="trending_content_div">
                <div className="head_content">
                  <h4>Trending</h4>
                </div>
                <div className=" mt-5">
                  <img src={trending} className="float-start w-100" alt="..." />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ***********Trending Section End************ */}
    </>
  );
}

export default Trending;
