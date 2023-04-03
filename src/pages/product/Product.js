import React from "react";
import { Container, Row, Col, Card, Nav, Pagination } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product.css";

import skarf from "../../assets/images/product/p2.jpg";
import watch from "../../assets/images/product/p3.jpg";
import shawl from "../../assets/images/product/p1.jpg";
import shoe from "../../assets/images/product/p4.jpg";

// import headphone from "../../assets/images/headphone.jpg";
// import headphone1 from "../../assets/images/headphone1.jpg";


import m1 from "../../assets/images/product/m_1.webp";
import m2 from "../../assets/images/product/m_2.webp";
import m3 from "../../assets/images/product/m_3.webp";
import m4 from "../../assets/images/product/m_4.webp";
import a1 from "../../assets/images/product/arival1.webp";
import a2 from "../../assets/images/product/arival2.webp";
import a3 from "../../assets/images/product/arival3.webp";
import a4 from "../../assets/images/product/arival4.webp";


function Product() {
  return (
    <>
      <section className="product">
        <div className="contact_bg_img">
          <div className="layer">
            <Container>
              <Row>
                <Col>
                  <div className="content">
                    <h2>Products</h2>
                    <div className="breadcrumb">
                      <span>
                        <Link title="Homepage" to="/home">
                          Home
                        </Link>
                      </span>
                      <span>Product</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="products_cart mt-5">
          <Container>
            <Row>
              <Col>
                <div className="seller_top_heading">
                  <h6>New Products</h6>

                  <h3>Shop The New Collection</h3>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="seller_cards ">
                  <Card className="card_size border-0 border-bottom">
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
                      <p>$85.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <Link to="#bag">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={shawl}
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

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <Link to="#sweter">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={skarf}
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

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <Link to="#sneaker">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={watch}
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

            <Row>
              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <Link to="#headphone">
                      <Card.Img
                        className="card_img animate__animated animate__zoomIn"
                        variant="top"
                        // src={headphone}
                        alt="headphone"
                      />
                    </Link>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <NavLink to="#home">Headphones & Earphones</NavLink>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Limited Edition White M2</Card.Title>
                      <p>$285.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <Link to="# headphone1 ">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        // src={ headphone1}
                        alt=" headphone1 "
                      />
                    </Link>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <NavLink to="#home">Headphones & Earphones</NavLink>
                          
                        </Nav>
                      </Card.Text>
                      <Card.Title>Linea Silver FX2</Card.Title>
                      <p>$135.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <Link to="#sweter">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={skarf}
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

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <Link to="#sneaker">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={watch}
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
            <div className="pagination mt-5">
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </Container>
        </div>

        <div className="mt-5">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="seller_top_heading">
                  <h6>New Products</h6>

                  <h3>Shop By Collection</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="d-flex">
                <Col xs={12} sm={6} md={3} className="p-0">
                  <div className="hover_pics card">
                    <img src={m1} className="grow_pics" alt="one" />

                    <div className="hover_pics_title">
                      <span className="text-center d-block pb-3">
                        Gown-Naira Suit Sharara Pair
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="p-0">
                  <div className="hover_pics  card">
                    <img src={m2} className="grow_pics" alt="two" />

                    <div className="hover_pics_title">
                      <span className=" text-center d-block pb-3">
                        Printed Tunic
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="p-0">
                  <div className="hover_pics  card">
                    <img src={m3} className="grow_pics" alt="three" />
                    <div className="hover_pics_title">
                      <span className="text-center d-block pb-3">
                        Straight Kurta
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="p-0">
                  <div className="hover_pics  card">
                    <img src={m4} className="grow_pics" alt="four" />
                    <div className="hover_pics_title">
                      <span className="text-center d-block pb-3">
                        Batik Print Kurta Set
                      </span>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </Container>
        </div>

        {/* *********Arival Section Start********** */}

        <div className="mt-5 pb-5">
          <Row>
            <Col xs={12}>
              <div className="seller_top_heading">
                <h6>Latest Products</h6>

                <h3>New Arivals</h3>
              </div>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="card">
                  <div className="new_arival">
                    <img src={a1} className="arival_pic" alt="one" />
                    {/* <img src={ah1} className="img-top" alt="Card Front"/> */}

                    <div className="product_tag">Sale</div>
                    <div className="product-img">
                      <div className="quick-product_btn">
                        <span>Quick View</span>
                      </div>
                    </div>
                  </div>

                  <div className="product_content">
                    <div className="product_title">
                      Cotton Tunic Top For Women Premium Product And Perfect
                      Fitting
                    </div>
                    <div className="product_price">
                      <span className="visually-hidden">Regular Price</span>
                      <span className="product_price--original">
                        Rs. 2,499.00{" "}
                      </span>
                      <span className="visually-hidden">Sale price</span>Rs.
                      1,699.00
                      <span className="product_price--savings">
                        Save Rs. 800.00
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="card">
                  <div className="new_arival">
                    <img src={a2} className="arival_pic" alt="two" />

                    <div className="product_tag">Sale</div>
                    <div className="product-img">
                      <div className="quick-product_btn">
                        <span>Quick View</span>
                      </div>
                    </div>
                  </div>
                  <div className="product_content">
                    <div className="product_title">
                      Cotton Tunic Top For Women Premium Product And Perfect
                      Fitting
                    </div>
                    <div className="product_price">
                      <span className="visually-hidden">Regular Price</span>
                      <span className="product_price--original">
                        Rs. 2,499.00{" "}
                      </span>
                      <span className="visually-hidden">Sale price</span>Rs.
                      1,699.00
                      <span className="product_price--savings">
                        Save Rs. 800.00
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="card">
                  <div className="new_arival">
                    <img src={a3} className="arival_pic" alt="three" />

                    <div className="product_tag">Sale</div>
                    <div className="product-img">
                      <div className="quick-product_btn">
                        <span>Quick View</span>
                      </div>
                    </div>
                  </div>
                  <div className="product_content">
                    <div className="product_title">
                      Cotton Tunic Top For Women Premium Product And Perfect
                      Fitting
                    </div>
                    <div className="product_price">
                      <span className="visually-hidden">Regular Price</span>
                      <span className="product_price--original">
                        Rs. 2,499.00{" "}
                      </span>
                      <span className="visually-hidden">Sale price</span>Rs.
                      1,699.00
                      <span className="product_price--savings">
                        Save Rs. 800.00
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3} className="p-0">
                <div className="card">
                  <div className="new_arival">
                    <img src={a4} className="arival_pic" alt="four" />

                    <div className="product_tag">Sale</div>
                    <div className="product-img">
                      <div className="quick-product_btn">
                        <span>Quick View</span>
                      </div>
                    </div>
                  </div>
                  <div className="product_content">
                    <div className="product_title">
                      Cotton Tunic Top For Women Premium Product And Perfect
                      Fitting
                    </div>
                    <div className="product_price">
                      <span className="visually-hidden">Regular Price</span>
                      <span className="product_price--original">
                        Rs. 2,499.00{" "}
                      </span>
                      <span className="visually-hidden">Sale price</span>Rs.
                      1,699.00
                      <span className="product_price--savings">
                        Save Rs. 800.00
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* *********Arival Section Start********** */}
      </section>
    </>
  );
}

export default Product;
