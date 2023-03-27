import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import phone from "../assets/images/phone.jpg";
import coffee_phone from "../assets/images/coffee_phone.jpg";
import juice from "../assets/images/juice.jpg";
import { TfiAngleRight } from "react-icons/tfi";

import "../assets/css/Responsive.css";
import "../pages/home/Home.css";
function StorieCards() {
  return (
    <>
      {/* ***********Storie Cards Start************ */}

      <section className="storie_cards_top_div">
        <Container>
          <div>
            <div>
              <h6>Latest Posts</h6>

              <h3>Read Our Top Stories</h3>
            </div>
            <Row>
              <Col md={4}>
                <div className="storie_cards">
                  <Card className="border-0 rounded-0 text-start">
                    <Card.Img variant="top" src={phone} />
                    <Card.Body>
                      <Card.Title className="storie_card_title">10 Innovative Playlist Apps</Card.Title>
                      <Card.Text>
                        <p className="card_date">February 12, 2016</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut...
                        </p>
                      </Card.Text>
                      <Card.Link
                        className="card_link text-decoration-none"
                        href="#"
                      >
                        Continue reading{" "}
                        <span className="card_span">
                          <TfiAngleRight />
                        </span>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={4}>
                <div className="storie_cards">
                  <Card className="border-0 rounded-0 text-start">
                    <Card.Img variant="top" src={coffee_phone} />
                    <Card.Body>
                      <Card.Title className="storie_card_title">15 Best Coffee Shops In LA</Card.Title>
                      <Card.Text>
                        <p className="card_date">February 12, 2016</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut...
                        </p>
                      </Card.Text>
                      <Card.Link
                        className="card_link text-decoration-none"
                        href="#"
                      >
                        Continue reading{" "}
                        <span className="card_span">
                          <TfiAngleRight />
                        </span>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={4}>
                <div className="storie_cards">
                  <Card className="border-0 rounded-0 text-start">
                    <Card.Img variant="top" src={juice} />
                    <Card.Body>
                      <Card.Title className="storie_card_title">Gabriele Jones</Card.Title>
                      <Card.Text>
                        <p className="card_date">February 12, 2016</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut...
                        </p>
                      </Card.Text>
                      <Card.Link
                        className="card_link text-decoration-none"
                        href="#"
                      >
                        Continue reading{" "}
                        <span className="card_span">
                          <TfiAngleRight />
                        </span>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* ***********Storie Cards End************ */}
    </>
  );
}

export default StorieCards;
