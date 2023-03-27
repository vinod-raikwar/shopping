import React from "react";
import {Container,Row,Col,Card, Carousel,Nav } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product.css";
import pic_1 from "../../assets/images/pic-1.jpg";
import pic_2 from "../../assets/images/pic-2.jpg";
import pic_3 from "../../assets/images/pic-3.jpg";
import pic_4 from "../../assets/images/pic-4.jpg";
import pic_5 from "../../assets/images/pic-5.jpg";
import ps1 from "../../assets/images/product-slider.jpg";
import ps2 from "../../assets/images/product-slider3.jpg";
import ps3 from "../../assets/images/product-slider1.jpg";
import shawl from "../../assets/images/p1.jpg";
import skarf from "../../assets/images/p2.jpg";
import watch from "../../assets/images/p3.jpg";
import shoe from "../../assets/images/p4.jpg";
// import ps3 from "../assets/images/product-slider1.jpg";
// import ps3 from "../assets/images/product-slider1.jpg";

function Product() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 100,
    cssEase: "linear",
  };

  return (
    <>
      <section className="product">
          <Carousel>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={ps1} alt="First slide" />
              <Carousel.Caption>
                <div className="product_slider_content ">
                  <h1  className="animate__animated animate__backInLeft">Mid Season Sale.</h1>
                  <p className="animate__animated animate__backInLeft">
                    Stock up on sportwear and limited edition collections on our{" "}
                    <br />
                    awesome mid season sale.
                  </p>

                  <div className="product_slider_link_div animate__animated animate__backInLeft">
                    <NavLink className="product_slider_link1" to="#action1">
                      Find Out More!
                    </NavLink>
                    <NavLink className="product_slider_link2" to="#action1">
                      Shop The Sale!
                    </NavLink>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={ps2} alt="Second slide" />

              <Carousel.Caption>
                <div className="product_slider_content ">
                  <h1 className="animate__animated animate__backInLeft">Mid Season Sale.</h1>
                  <p className="animate__animated animate__backInLeft">
                    Stock up on sportwear and limited edition collections on our{" "}
                    <br />
                    awesome mid season sale.
                  </p>

                  <div className="product_slider_link_div animate__animated animate__backInLeft">
                    <NavLink className="product_slider_link1" to="#action1">
                      Find Out More!
                    </NavLink>
                    <NavLink className="product_slider_link2" to="#action1">
                      Shop The Sale!
                    </NavLink>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={ps3} alt="Third slide" />

              <Carousel.Caption>
                <div className="product_slider_content ">
                  <h1 className="animate__animated animate__backInLeft">Mid Season Sale.</h1>
                  <p className="animate__animated animate__backInLeft">
                    Stock up on sportwear and limited edition collections on our{" "}
                    <br />
                    awesome mid season sale.
                  </p>

                  <div className="product_slider_link_div animate__animated animate__backInLeft">
                    <NavLink className="product_slider_link1" to="#action1">
                      Find Out More!
                    </NavLink>
                    <NavLink className="product_slider_link2" to="#action1">
                      Shop The Sale!
                    </NavLink>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


          <Slider {...settings} className="speed_slider">
            <div className="product_slider">
              <img src={pic_1} alt="women" />
            </div>
            <div className="product_slider">
              <img src={pic_2} alt="" />
            </div>
            <div className="product_slider">
              <img src={pic_3} alt="" />
            </div>
            <div className="product_slider">
              <img src={pic_4} alt="" />
            </div>
            <div className="product_slider">
              <img src={pic_5} alt="" />
            </div>
            <div className="product_slider">
              <img src={pic_2} alt="" />
            </div>
            <div className="product_slider">
              <img src={pic_3} alt="" />
            </div>
          </Slider>
         
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
            <Col sm={3}>
              <div className="seller_cards">
                <Card className="card_size border-0 border-bottom">
                  <Link to="#shoe">
                    <Card.Img
                      className="card_img animate__animated animate__zoomIn"
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

            <Col sm={3}>
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

            <Col sm={3}>
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

            <Col sm={3}>
              <div className="seller_cards">
                <Card className="card_size border-0 border-bottom">
                  <Link to="#sneaker">
                    <Card.Img
                      className="card_img"
                      variant="top"
                      src={watch }
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
            <Col sm={3}>
              <div className="seller_cards">
                <Card className="card_size border-0 border-bottom">
                  <Link to="#shoe">
                    <Card.Img
                      className="card_img animate__animated animate__zoomIn"
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

            <Col sm={3}>
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

            <Col sm={3}>
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

            <Col sm={3}>
              <div className="seller_cards">
                <Card className="card_size border-0 border-bottom">
                  <Link to="#sneaker">
                    <Card.Img
                      className="card_img"
                      variant="top"
                      src={watch }
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
            <Col sm={3}>
              <div className="seller_cards">
                <Card className="card_size border-0 border-bottom">
                  <Link to="#shoe">
                    <Card.Img
                      className="card_img animate__animated animate__zoomIn"
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

            <Col sm={3}>
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

            <Col sm={3}>
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

            <Col sm={3}>
              <div className="seller_cards">
                <Card className="card_size border-0 border-bottom">
                  <Link to="#sneaker">
                    <Card.Img
                      className="card_img"
                      variant="top"
                      src={watch }
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
          
         </Container>
          
      </section>
    </>
  );
}

export default Product;
