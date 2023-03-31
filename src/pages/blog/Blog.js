import React from "react";
import "./Blog.css";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { TfiAngleRight } from "react-icons/tfi";
// import { NavLink,Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <div className="">
        <div className="blog_bg_color">
          <Container>
            <Row>
              <Col sm={6}>
                <div className="blog_bg_color">
                  <h6>Blog Chequered</h6>
                </div>
              </Col>
              <Col sm={6}>
                <div className="blog_bg_color">
                  <h6>Suprema / Blog Chequered</h6>
                </div>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row>
              <Col xs={12} sm={6} lg={3} className="p-0">
                <div className="blogs">
                  <NavLink to="/">
                    <h3>Where Music Is Headed Next</h3>{" "}
                  </NavLink>
                  <p className="card_date">February 12, 2016</p>
                  <p className="blog_para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam est minima voluptatem eum expedita distinctio facere
                    totam quae ipsum officia!
                  </p>
                  <p className="card_link text-decoration-none">
                    Continue reading
                    <span className="card_span">
                      <TfiAngleRight />
                    </span>
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={3} className="p-0">
                <div className="blogs bg">
                  <NavLink to="/">
                    <h3>The 12 Best Apps Of 2015</h3>{" "}
                  </NavLink>
                  <p className="card_date">February 12, 2016</p>
                  <p className="blog_para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam est minima voluptatem eum expedita distinctio facere
                    totam quae ipsum officia!
                  </p>
                  <p className="card_link text-decoration-none">
                    Continue reading
                    <span className="card_span">
                      <TfiAngleRight />
                    </span>
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={3} className="p-0">
                <div className="blogs blogs_img ">
                  <p className="card_date">February 12, 2016</p>
                  <NavLink to="/">
                    <h3>
                      You Can't put a limit on anything. The more your dream,
                      the farther you get
                    </h3>{" "}
                  </NavLink>

                  <span class="quote_author">– Gabriele Jones</span>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={3} className="p-0">
                <div className="blogs bg">
                  <NavLink to="/">
                    <h3>The 12 Best Apps Of 2015</h3>{" "}
                  </NavLink>
                  <p className="card_date">February 12, 2016</p>
                  <p className="blog_para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam est minima voluptatem eum expedita distinctio facere
                    totam quae ipsum officia!
                  </p>
                  <p className="card_link text-decoration-none">
                    Continue reading
                    <span className="card_span">
                      <TfiAngleRight />
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Blog;
