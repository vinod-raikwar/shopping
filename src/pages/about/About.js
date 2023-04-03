import React from "react";
import "./About.css";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import member_1 from "../../assets/images/member-1.jpg";
import member_2 from "../../assets/images/member-2.jpg";
import member_3 from "../../assets/images/member-3.jpg";
import member_4 from "../../assets/images/member-4.jpg";

import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import portfolio_1 from "../../assets/images/portfolio-1.jpg";
import portfolio_5 from "../../assets/images/portfolio-5.jpg";
import portfolio_7 from "../../assets/images/portfolio-7.jpg";
import {
  BsPlusLg,
  BsLink45Deg,
  BsEmojiSmile,
  BsJournalRichtext,
  BsHeadset,
} from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function About() {
  return (
    <>
      <section>
        {/* ***********SLIDE SECTION START*************** */}
        <div className="contact_bg_img">
          <div className="layer">
            <Container>
              <Row>
                <Col>
                  <div className="content">
                    <h2>About Us</h2>
                    <div className="breadcrumb">
                      <span>
                        <Link title="Homepage" to="/home">
                          Home
                        </Link>
                      </span>
                      <span>About</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* ***********SLIDE SECTION END*************** */}

        {/* ***********PROFILE SECTION START*************** */}
        <div className="about-value-section mt-5 mb-5">
          <Container>
            <div className="about-value-main">
              <Row>
                <Col md={7}>
                  <div className="about-value-box">
                    <div className="main_heading">
                      <h2>What we value</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p>
                    </div>
                    <div className="about-img-box">
                      <img
                        className="d-block w-100"
                        src={member_1}
                        alt="about Img"
                      />
                    </div>
                  </div>
                </Col>
                {/* ========COLUMN END======== */}
                <Col md={4}>
                  <div className="about-value-box">
                    <div className="about-img-box">
                      <img
                        className="d-block w-100"
                        src={member_2}
                        alt="about Img"
                      />
                    </div>
                    <div className="main_heading mt-4">
                      <p>
                        Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p>
                      <h6>Ipsum has</h6>
                      <span>Funder Of Beautain</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* ***********PROFILE SECTION END*************** */}

        {/* ***********COUNT SECTION START*************** */}
        <div className="section counts">
          <Container>
            <Row g={0}>
              <Col xs={12} sm={6} md={3}>
                <div className="count_box">
                  <span className="icon">
                    <BsEmojiSmile />
                  </span>
                  <ScrollTrigger>
                    <span className="counter">
                      <CountUp start={0} end={423} duration={5} delay={0} />
                      <span className="plus_icon">+</span>
                    </span>
                  </ScrollTrigger>

                  <p>
                    <strong>Happy Clients</strong> consequuntur quae qui deca
                    rode
                  </p>

                  <Link to="#">Find out more »</Link>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <div className="count_box">
                  <span className="icon">
                    <BsJournalRichtext />
                  </span>
                  <ScrollTrigger>
                    <span className="counter">
                      <CountUp start={0} end={521} duration={5} delay={0} />
                      <span className="plus_icon">+</span>
                    </span>
                  </ScrollTrigger>

                  <p>
                    <strong>Projects</strong> consequuntur quae qui deca rode.
                  </p>

                  <Link to="#">Find out more »</Link>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <div className="count_box">
                  <span className="icon">
                    <BsHeadset />
                  </span>
                  <ScrollTrigger>
                    <span className="counter">
                      <CountUp start={0} end={1440} duration={5} delay={0} />
                      <span className="plus_icon">+</span>
                    </span>
                  </ScrollTrigger>

                  <p>
                    <strong>Hours Of Support</strong> consequuntur quae qui deca
                    rode
                  </p>

                  <Link to="#">Find out more »</Link>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <div className="count_box">
                  <span className="icon">
                    <HiOutlineUsers />
                  </span>
                  <ScrollTrigger>
                    <span className="counter">
                      <CountUp start={0} end={150} duration={5} delay={0} />
                      <span className="plus_icon">+</span>
                    </span>
                  </ScrollTrigger>

                  <p>
                    <strong>Hard Workers</strong> consequuntur quae qui deca
                    rode
                  </p>

                  <Link to="#">Find out more »</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ***********COUNT SECTION END*************** */}

        {/* ***********PORTFOLIO SECTION START*************** */}
        <div className="section portfolio_bg">
          <Container>
            <div className="section_title">
              <h2>Our Portfolio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                distinctio nobis veniam temporibus facilis recusandae? Sunt
                corrupti, est soluta eum dolores quisquam ad omnis
                exercitationem, sint veritatis minima tempore esse.
              </p>
            </div>
            <Row className="justify-content-md-center position-relative">
              <Col md={{ span: 3 }}>
                <div className="portfolio_filters">
                  <NavLink to="">All</NavLink>
                  <NavLink to="">App</NavLink>
                  <NavLink to="">Card</NavLink>
                  <NavLink to="">Web</NavLink>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
                <div className="portfolio_wrap">
                  <img src={portfolio_1} className="img-fluid" alt="" />
                  <div className="portfolio_info">
                    <h4>App1</h4>
                    <p>App</p>
                    <div className="portfolio_links">
                      <Link to="">
                        <BsPlusLg />{" "}
                      </Link>
                      <Link to="">
                        <BsLink45Deg />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={4}>
                <div className="portfolio_wrap">
                  <img src={portfolio_5} className="img-fluid" alt="" />
                  <div className="portfolio_info">
                    <h4>App1</h4>
                    <p>App</p>
                    <div className="portfolio_links">
                      <Link to="">
                        <BsPlusLg />{" "}
                      </Link>
                      <Link to="">
                        <BsLink45Deg />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={4}>
                <div className="portfolio_wrap">
                  <img src={portfolio_7} className="img-fluid" alt="" />
                  <div className="portfolio_info">
                    <h4>App1</h4>
                    <p>App</p>
                    <div className="portfolio_links">
                      <Link to="">
                        <BsPlusLg />{" "}
                      </Link>
                      <Link to="">
                        <BsLink45Deg />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ***********PORTFOLIO SECTION END*************** */}

        {/* ***********TEAM SECTION START*************** */}
        <div className="section">
          <Container>
            <div className="section_title">
              <h2>Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                ut exercitationem amet possimus illo totam animi ab consequatur
                expedita fugiat. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellat fuga ut maxime, soluta adipisci
                veritatis nisi, omnis vel laboriosam provident officiis eveniet
                dignissimos accusantium dolorem, expedita ducimus officia error
                rerum.
              </p>
            </div>
            <Row>
              <Col xs={12} sm={6} lg={3}>
                <div className="member">
                  <img src={member_1} class="img-fluid" alt="" />
                  <div className="member_info">
                    <div className="member_info_content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                    </div>
                    <div className="social">
                      <Link to="">
                        <BsTwitter />
                      </Link>
                      <Link to="">
                        <BsFacebook />
                      </Link>
                      <Link to="">
                        <BsInstagram />
                      </Link>
                      <Link to="">
                        <BsLinkedin />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <div className="member">
                  <img src={member_2} class="img-fluid" alt="" />
                  <div className="member_info">
                    <div className="member_info_content">
                      <h4>Saraha Jhonson</h4>
                      <span>Product Manager</span>
                    </div>
                    <div className="social">
                      <Link to="">
                        <BsTwitter />
                      </Link>
                      <Link to="">
                        <BsFacebook />
                      </Link>
                      <Link to="">
                        <BsInstagram />
                      </Link>
                      <Link to="">
                        <BsLinkedin />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <div className="member">
                  <img src={member_3} class="img-fluid" alt="" />
                  <div className="member_info">
                    <div className="member_info_content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                    </div>
                    <div className="social">
                      <Link to="">
                        <BsTwitter />
                      </Link>
                      <Link to="">
                        <BsFacebook />
                      </Link>
                      <Link to="">
                        <BsInstagram />
                      </Link>
                      <Link to="">
                        <BsLinkedin />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <div className="member">
                  <img src={member_4} class="img-fluid" alt="" />
                  <div className="member_info">
                    <div className="member_info_content">
                      <h4>Amanda Japson</h4>
                      <span>Accountant</span>
                    </div>
                    <div className="social">
                      <Link to="">
                        <BsTwitter />
                      </Link>
                      <Link to="">
                        <BsFacebook />
                      </Link>
                      <Link to="">
                        <BsInstagram />
                      </Link>
                      <Link to="">
                        <BsLinkedin />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ***********TEAM SECTION END*************** */}
      </section>
    </>
  );
}
export default About;
