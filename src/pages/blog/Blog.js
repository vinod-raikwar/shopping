import React from "react";
import "./Blog.css";
import {
  Container,
  Row,
  Col,
  NavLink,
  Form,
  Button,
  Nav,
  Pagination,
} from "react-bootstrap";
import { TfiAngleRight } from "react-icons/tfi";
import {
  FaEye,
  FaCommentAlt,
  FaRegCalendarAlt,
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import kurti from "../../assets/images/blog/kurti_shop6.webp";
import b1 from "../../assets/images/blog/blog1-top-view.jpg";
import b2 from "../../assets/images/blog/blog2.jpg";
import b3 from "../../assets/images/blog/blog3.jpg";
import b4 from "../../assets/images/blog/blog4.jpg";
import b5 from "../../assets/images/blog/blog5.avif";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init();
  }, []);

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
                    tota m quae ipsum officia!
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

        {/* ====BLOG SECTION START===== */}
        <div className="blog-page-section">
          <Container>
            <Row>
              {/* =======COLUMN 8 BLOG START===== */}

              <Col xs={12} md={8}>
                <div className="blog-page-full">
                  <div
                    div
                    className="h-blog-box"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <div className="h-blog-box-img">
                      <Link to="/" className="nav-link">
                        <img className="d-block w-100" src={b1} alt="blog" />
                      </Link>
                    </div>

                    <div className="h-blog-box-content">
                      <div class="blog-headline">
                        <Link to="/" className="nav-link ltx-date">
                          <span className="dt">April 01, 2023</span>
                        </Link>

                        <span className="blog-cats">
                          <Link to="/" className="nav-link">
                            Fashion Blogs
                          </Link>
                        </span>
                      </div>
                      <Link to="/" className="nav-link blog-heading">
                        <h3>Most Significant Products I Love It. 2023</h3>
                      </Link>
                      <div className="blog-excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Placeat recusandae facere itaque unde voluptatem
                          reprehenderit esse, consequuntur magnam, quam rem,
                          omnis at velit quidem corrupti ut dicta a fuga ex.
                        </p>
                      </div>
                      <ul className="blog-info">
                        <li>
                          <span>
                            <FaEye />
                            13
                          </span>
                        </li>
                        <li>
                          <span>
                            <FaCommentAlt />
                            11
                          </span>
                        </li>
                      </ul>
                      <div className="blog-btn">
                        <Link
                          to="/single-blog"
                          className="nav-link hvr-shutter-in-horizontal"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* =====BLOG BOX END===== */}
                  <div
                    className="h-blog-box"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <div className="h-blog-box-img">
                      <Link to="/" className="nav-link">
                        <img className="d-block w-100" src={b2} alt="blog" />
                      </Link>
                    </div>
                    <div className="h-blog-box-content">
                      <div class="blog-headline">
                        <Link to="/" className="nav-link ltx-date">
                          <span className="dt">April 01, 2023</span>
                        </Link>

                        <span className="blog-cats">
                          <Link to="/" className="nav-link">
                            Architechture
                          </Link>
                        </span>
                      </div>
                      <Link to="/" className="nav-link blog-heading">
                        <h3>
                          Most Significant Architectural Projects of the Year
                          2019
                        </h3>
                      </Link>
                      <div className="blog-excerpt">
                        <p>
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis. …
                        </p>
                      </div>
                      <ul className="blog-info">
                        <li>
                          <span>
                            <FaEye />
                            13
                          </span>
                        </li>
                        <li>
                          <span>
                            <FaCommentAlt />
                            11
                          </span>
                        </li>
                      </ul>
                      <div className="blog-btn">
                        <Link
                          to="/single-blog"
                          className="nav-link hvr-shutter-in-horizontal"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* =====BLOG BOX END===== */}
                  <div
                    className="h-blog-box"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <div className="h-blog-box-img">
                      <Link to="/" className="nav-link">
                        <img className="d-block w-100" src={b3} alt="blog " />
                      </Link>
                    </div>
                    <div className="h-blog-box-content">
                      <div class="blog-headline">
                        <Link to="/" className="nav-link ltx-date">
                          <span className="dt">April 01, 2023</span>
                        </Link>

                        <span className="blog-cats">
                          <Link to="/" className="nav-link">
                            Architechture
                          </Link>
                        </span>
                      </div>
                      <Link to="/" className="nav-link blog-heading">
                        <h3>
                          Most Significant Architectural Projects of the Year
                          2019
                        </h3>
                      </Link>
                      <div className="blog-excerpt">
                        <p>
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis. …
                        </p>
                      </div>
                      <ul className="blog-info">
                        <li>
                          <span>
                            <FaEye />
                            13
                          </span>
                        </li>
                        <li>
                          <span>
                            <FaCommentAlt />
                            11
                          </span>
                        </li>
                      </ul>
                      <div className="blog-btn">
                        <Link
                          to="/single-blog"
                          className="nav-link hvr-shutter-in-horizontal"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    {/* =====BLOG BOX END===== */}
                  </div>
                </div>
              </Col>
              {/* =======COLUMN 8 BLOG END===== */}

              {/* =======COLUMN 4 SIDEBAR START===== */}

              <Col xs={12} md={4}>
                <div className="blog-page-sidebar">
                  <div className="side-search ss-box">
                    <h2>Search</h2>
                    <Nav className="header-icon">
                      <Form className="d-flex header-form">
                        <Form.Control
                          type="search"
                          placeholder="Search here"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button type="search" className="header-btn">
                          Search
                        </Button>
                      </Form>
                    </Nav>
                  </div>
                  {/* ======BOX END====== */}
                  <div className="side-category ss-box">
                    <h2>Categories</h2>
                    <ul>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Men's jeans
                        </Link>
                        <span>9</span>
                      </li>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Men's Shoes
                        </Link>
                        <span>9</span>
                      </li>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Women's dresses
                        </Link>
                        <span>9</span>
                      </li>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Infant
                        </Link>
                        <span>9</span>
                      </li>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Kids
                        </Link>
                        <span>9</span>
                      </li>
                    </ul>
                  </div>
                  {/* ======BOX END====== */}
                  <div className="side-recent ss-box">
                    <h2>Recent Post</h2>
                    <div className="media">
                      <img className="d-block w-100" src={b4} alt="blog" />
                      <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        <Link to="/" className="nav-link">
                          <FaRegCalendarAlt /> March 30, 2023
                        </Link>
                      </div>
                    </div>
                    <div className="media">
                      <img className="d-block w-100" src={b5} alt="blog" />
                      <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        <Link to="/" className="nav-link">
                          <FaRegCalendarAlt /> April 20, 2023
                        </Link>
                      </div>
                    </div>

                    <div className="media">
                      <img className="d-block w-100" src={kurti} alt="blog" />
                      <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        <Link to="/" className="nav-link">
                          <FaRegCalendarAlt /> May 30, 2023
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* ==========BOX END======= */}
                  <div className="side-category ss-box">
                    <h2>Follow Us</h2>
                    <ul>
                      <ul className="footer-social-networks">
                        <li className="fb">
                          <Link to="/" className="nav-link ">
                            <FaFacebookF />
                          </Link>
                        </li>

                        <li className="lin">
                          <Link to="/" className="nav-link ">
                            <FaLinkedinIn />
                          </Link>
                        </li>
                        <li className="tw">
                          <Link to="/" className="nav-link ">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li className="pin">
                          <Link to="/" className="nav-link ">
                            <FaPinterestP />
                          </Link>
                        </li>
                        <li className="you">
                          <Link to="/" className="nav-link ">
                            <FaYoutube />
                          </Link>
                        </li>
                        <li className="ins">
                          <Link to="/" className="nav-link ">
                            <FaInstagramSquare />
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  {/* ======BOX END====== */}
                </div>
              </Col>

              {/* =======COLUMN 4 SIDEBAR END===== */}
            </Row>
            <div className="pagination-box">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item active>{10}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Container>
        </div>
        {/* ====BLOG SECTION END===== */}
      </div>
    </>
  );
}

export default Blog;
