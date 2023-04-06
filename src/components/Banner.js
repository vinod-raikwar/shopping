import React from "react";
import { Row, Col,Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

function Banner() {
  return (
    <>
      <section className="bg_img">
          <Container fluid>
            <Row className="justify-content-center">
              <Col sm={7}>
                <div className=" bg_img_content ">
                  <h1>Shop Limited Edition</h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, reiciendis beatae voluptatem eius iste laudantium
                    saepe praesentium. Totam, ex recusandae!
                  </p>

                  <div className="mrt58">
                  <Link to="#/" className="link_btn me-3">Read More</Link>

                  <Link to="#/" className="link_trans_btn">Shop Now!</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </>
  );
}

export default Banner;
