import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

function ShippingBar() {
  return (
    <>
      {/* ***********Shipping BannerStart************ */}
      <section className="shipping_top_div">
        <div className="shipping_banner_img">
          <div className="shipping_banner_content">
            <Container>
              <Row>
                <Col md={8}>
                  <div className="">
                    <h2 className="shipping_banner_heading">
                      Free Shipping Wordwide.
                    </h2>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="shipping_banner_link_div">
                    <Nav.Link className="shipping_banner_link" href="#action1">
                      Shop Now!
                    </Nav.Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* ***********Shipping Banner End************ */}
    </>
  );
}

export default ShippingBar;
