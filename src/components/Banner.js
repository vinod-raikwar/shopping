import React from "react";
import { Row, Col,Container,Button } from "react-bootstrap";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";

function Banner() {
  return (
    <>
      <section className="bg_img">
          <Container fluid>
            <Row className="banner_div">
              <Col sm={7}>
                <div className="bg_img_content ">
                  <h1>Shop Limited Edition</h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, reiciendis beatae voluptatem eius iste laudantium
                    saepe praesentium. Totam, ex recusandae!
                  </p>

                  <div className="bg_img_conent_btns mrgn">
                    <Button className="btn1 rounded-0" variant="dark">
                      Find Out More
                    </Button>

                    <Button className="btn2 rounded-0" variant="Outline-dark">
                      Shop Now!
                    </Button>
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
