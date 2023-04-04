import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

function TimerBag() {
  return (
    <>
      <section className="deal-of-week">
        <Container>
          <div className="timer_bag_bg">
            <Row>
              <Col xs={12} md={6}>
                <div className="timer_content text-center">
                  <div className="timer_title">
                    <h2>Deal of the week</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur minima quod autem ab dolorum, quibusdam
                      repudiandae voluptatibus quos eaque aspernatur?
                    </p>
                    <div className="product_price">
                      $35.00
                      <span>/HandBag</span>
                    </div>
                  </div>
                  <div className="countdown_timer">
                    <div className="cd_item">
                      <span>29</span>
                      <p>Days</p>
                    </div>
                    <div className="cd_item">
                      <span>08</span>
                      <p>hrs</p>
                    </div>
                    <div className="cd_item">
                      <span>17</span>
                      <p>min</p>
                    </div>
                    <div className="cd_item">
                      <span>
                        <CountUp
                          start={0}
                          end={52}
                          duration={100}
                          delay={100}
                        />
                      </span>
                      <p>sec</p>
                    </div>
                  </div>
                  <Link to="#/" className="timer_btn">
                    Shop Now
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default TimerBag;
