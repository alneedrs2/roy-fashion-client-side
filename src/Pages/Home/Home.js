import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner/banner-1.jpg";
import banner2 from "../../images/banner/banner-2.jpg";
import Products from "../Products/Products";
import "./Home.css";
import MoreShop from "./MoreShop/MoreShop";
import SpecialFeatures from "./SpecialFeatures/SpecialFeatures";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="mb-5">
            <h1>Roy<span className="carou-title1">&</span>Fashions House</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      <SpecialFeatures></SpecialFeatures>
      <Products></Products>
      <MoreShop></MoreShop>
    </div>
  );
};

export default Home;
