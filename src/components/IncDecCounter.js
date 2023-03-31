import React from "react";
import { Row, Col } from "react-bootstrap";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../pages/home/Home.css";
import "../assets/css/Responsive.css";
import { useState } from "react";

function IncDecCounter() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 100) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className="cart">
        <div><h5>Total: $245.00</h5></div>
        
        <Row>
          <Col sm={4}>
            <div className="input-group">
              <input
                type="text"
                title="Qty"
                className="input-text qty text qodef-quantity-input"
                value={num}
                name="quantity"
                onChange={handleChange}
              />

              <div className="input-group-prepend">
                <div className="inc_dec_btn">
                  <span className=" plus" type="button" onClick={incNum}>
                    <TfiAngleUp />
                  </span>
                </div>

                <div className="inc_dec_btn">
                  <span className=" minus" type="button" onClick={decNum}>
                    <TfiAngleDown />
                  </span>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={8}>
            <div className="buy_now">
              <button type="submit" className="buy_btn">
                {" "}
                <span className="">Buy Now</span>{" "}
                <span className="cart_icon">
                  <AiOutlineShoppingCart />
                </span>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default IncDecCounter;
