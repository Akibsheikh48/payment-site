import React from "react";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <Link to="/sign_up" className="pricing__container_card">
              <div className="pricing__container_cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>£8.99</h4>
                <p>per month</p>
                <ul className="pricing__container_features">
                  <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>£10,000 Limit</li>
                </ul>
                <Button buttonSize="btn__wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to="/sign_up" className="pricing__container_card">
              <div className="pricing__container_cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>£29.99</h4>
                <p>per month</p>
                <ul className="pricing__container_features">
                  <li>1000 Transactions</li>
                  <li>3.5% Cash Back</li>
                  <li>£ 100,000 Limit</li>
                </ul>
                <Button buttonSize="btn__wide" buttonColor="blue">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to="/sign_up" className="pricing__container_card">
              <div className="pricing__container_cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>£99.99</h4>
                <p>per month</p>
                <ul className="pricing__container_features">
                  <li>Unlimited Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize="btn__wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
