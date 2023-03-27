import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
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
                  <h5>Captivating and Creative</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae dicta laborum officiis nobis odio? Facere quo
                    reiciendis qui consequatur dolore.
                  </p>
                  <Nav.Link href="#">Find Out More</Nav.Link>
                </div>
              </Col>
              <Col md={4}>
                <div className="text_cmpnt_content">
                  <h5>Designed With Care</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae dicta laborum officiis nobis odio? Facere quo
                    reiciendis qui consequatur dolore.
                  </p>
                  <Nav.Link href="#">Find Out More</Nav.Link>
                </div>
              </Col>
              <Col md={4}>
                <div className="text_cmpnt_content">
                  <h5>Stunning On All Screens</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae dicta laborum officiis nobis odio? Facere quo
                    reiciendis qui consequatur dolore.
                  </p>
                  <Nav.Link href="#">Find Out More</Nav.Link>
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
