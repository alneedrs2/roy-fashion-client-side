import React from "react";
import { FaTruckPickup } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import "./SpecialFeatures.css";

const SpecialFeatures = () => {
  return (
    <div className="special-features container mt-5">
      <div className="row align-items-center">
        <div className="col-md-4">
          <div className="d-flex">
            <div className="me-3">
              <h1>
                <FaTruckPickup></FaTruckPickup>
              </h1>
            </div>
            <div>
              <h4>PAYMENT & DELIVERY</h4>
              <p>Free shipping for orders over $50</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex">
            <div className="me-3">
              <h1>
                <FaRedo></FaRedo>
              </h1>
            </div>
            <div>
              <h4>RETURN & REFUND</h4>
              <p>RETURN & REFUND Free 100% money back guarantee</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex">
            <div className="me-3">
              <h1>
                <FaHeadset></FaHeadset>
              </h1>
            </div>
            <div>
              <h4>QUALITY SUPPORT</h4>
              <p>Alway online feedback 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;
