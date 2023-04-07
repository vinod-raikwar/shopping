import React from "react";
import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import children from "../../assets/images/children.jpg.webp";
import watch from "../../assets/images/black-watch.webp";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function Services() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <>
      <section>
        <div className="banner_bg_img">
          <Container>
            <Row>
              <Col>
                <div className="banner_content">
                  <h2>Services</h2>
                  <div className="breadcrumb">
                    <span>
                      <Link title="Homepage" to="/home">
                        Home
                      </Link>
                    </span>
                    <span>Services</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mrt58">
          <Container>
            <Row>
              <Col md={4}>
                <div className="card_animation">
                  <Link className="content_item" to="#">
                    <figure className="image">
                      <img src={children} alt="" className="img-fluid" />
                    </figure>
                    <div className="text">
                      <span className="text-uppercase">Collections</span>
                      <h3>Children</h3>
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col md={4}>
                <div className="product">
                  <div className="hvr-img psn-r">
                    <img src={watch} alt="" />
                    <Link to="#" className="view-link p-btn psn-a">
                      Quick View
                    </Link>
                  </div>
                  <div className="product-text">
                    <h5>Vintage Inspired Classic</h5>
                    <h5>$38.00</h5>
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

export default Services;
