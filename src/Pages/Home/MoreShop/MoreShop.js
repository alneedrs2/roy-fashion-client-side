import React from "react";
import eidShop from "../../../images/eid-special.jpg";

const MoreShop = () => {
  return (
    <div className="container  mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img className="img-fluid" src={eidShop} alt="" />
        </div>
        <div className="col-md-6">
          <h1>EID SPECIAL '22</h1>
          <p>
            Sun-soaked days, al fresco dates, feel-good styles, and never-ending
            vacay vibes – we’re toasting to the upcoming chill times dressed in
            cheery shades, of-the-moment prints, and darling details. Presenting
            our Spring Summer ’22 drop.
          </p>
          <button className="btn btn-danger">SHOP THE COLLECTION</button>
        </div>
      </div>
    </div>
  );
};

export default MoreShop;
