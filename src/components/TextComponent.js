import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import bagGift from "../assets/images/textIcon/bag-gift.png";
import service from "../assets/images/textIcon/customer-service.png";
import security from "../assets/images/textIcon/security.png";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";
function TextComponent() {
  return (
    <>
      <section>
        <div className="text_cmpnt_top_div">
          <Container>
            <Row>
              <Col md={4}>
                <div className="text_cmpnt_content">
                  <div className="d-flex justify-content-center align-item-center mb-4">
                    <img src={bagGift} className="text_img_icons" alt="..." />
                  </div>
                  <div className="text-center">
                    <h5>Captivating and Creative</h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Beatae dicta laborum officiis nobis odio? Facere quo
                      reiciendis qui consequatur dolore.
                    </p>
                    <Nav.Link href="#">Find Out More</Nav.Link>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="text_cmpnt_content">
                  <div className="d-flex justify-content-center align-item-center mb-4">
                    <img src={service} className="text_img_icons" alt="..." />
                  </div>
                  <div className="text-center">
                    <h5>Designed With Care</h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Beatae dicta laborum officiis nobis odio? Facere quo
                      reiciendis qui consequatur dolore.
                    </p>
                    <Nav.Link href="#">Find Out More</Nav.Link>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="text_cmpnt_content">
                  <div className="d-flex justify-content-center align-item-center mb-4">
                    <img src={security} className="text_img_icons" alt="..." />
                  </div>
                  <div className="text-center">
                    <h5>Stunning On All Screens</h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Beatae dicta laborum officiis nobis odio? Facere quo
                      reiciendis qui consequatur dolore.
                    </p>
                    <Nav.Link href="#">Find Out More</Nav.Link>
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

export default TextComponent;
