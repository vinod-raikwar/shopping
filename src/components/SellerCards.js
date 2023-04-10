import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";
import shoe from "../assets/images/seller/shoe.jpg";
import bag from "../assets/images/seller/bag.jpg";
import sneaker from "../assets/images/seller/sneaker.jpg";
import sweter from "../assets/images/seller/sweter.jpg";

function SellerCards() {
  return (
    <>
      <section>
        <div  className="mrt58">
        <Container>
          <Row>
            <Col>
              <div className="main_heading">
                <h6>Best Sellers</h6>

                <h3>Browse Through Our Best Selleres</h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6} lg={3} className="p-0">
              <div className="mrt30">
                <Card className="card_size border-0 ">
                  <Link to="#shoe">
                    <Card.Img
                      className="card_img"
                      variant="top"
                      src={shoe}
                      alt="shoe"
                    />
                  </Link>

                  <Card.Body>
                    <Card.Text>
                      <Nav className="card_category">
                        <NavLink to="#home">Men,</NavLink>
                        <NavLink to="#features">Shoes,</NavLink>
                        <NavLink to="#pricing">Spotswear</NavLink>
                      </Nav>
                    </Card.Text>
                    <Card.Title>Black Skater Sneaker</Card.Title>
                    <p >$85.00</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} sm={6} lg={3} className="p-0">
              <div className="mrt30">
                <Card className="card_size border-0">
                  <Link to="#bag">
                    <Card.Img
                      className="card_img"
                      variant="top"
                      src={bag}
                      alt="bag"
                    />
                  </Link>

                  <Card.Body>
                    <Card.Text>
                      <Nav className="card_category">
                        <NavLink to="#home">Accessories,</NavLink>
                        <NavLink to="#features">New Collection,</NavLink>
                        <NavLink to="#pricing">Women</NavLink>
                      </Nav>
                    </Card.Text>
                    <Card.Title>Cream Tote Bag</Card.Title>
                    <p>$35.00</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} sm={6} lg={3} className="p-0">
              <div className="mrt30">
                <Card className="card_size border-0">
                  <Link to="#sweter">
                    <Card.Img
                      className="card_img"
                      variant="top"
                      src={sweter}
                      alt="sweter"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Text>
                      <Nav className="card_category">
                        <NavLink to="#home">New Collection,</NavLink>
                        <NavLink to="#features">Sportswear,</NavLink>
                        <NavLink to="#pricing">Women</NavLink>
                      </Nav>
                    </Card.Text>
                    <Card.Title>Futura Jumper</Card.Title>
                    <p>$135.00</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} sm={6} lg={3} className="p-0">
              <div className="mrt30">
                <Card className="card_size border-0">
                  <Link to="#sneaker">
                    <Card.Img
                      className="card_img"
                      variant="top"
                      src={sneaker}
                      alt="sneaker"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Text>
                      <Nav className="card_category">
                        <NavLink to="#home">Men,</NavLink>
                        <NavLink to="#features">Shoes,</NavLink>
                        <NavLink to="#pricing">Spotswear</NavLink>
                      </Nav>
                    </Card.Text>
                    <Card.Title>Leopard Print Sneaker</Card.Title>
                    <p>$185.00</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-center mrt30">
            <Link to="#/" className="link_btn">View All</Link>
          </div>
        </Container>
        </div>
      </section>
    </>
  );
}

export default SellerCards;
