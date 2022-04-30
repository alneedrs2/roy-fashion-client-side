import React from "react";
import { Card } from "react-bootstrap";
import './SingleProduct.css'

const SingleProduct = ({ product }) => {
  const { name, img, description, price, quantity, supplier} = product;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 g-5">
      <Card className="card-detail">
        <Card.Img className="product-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h2>${price}</h2>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <p>Available Quantity: {quantity}</p>
            <p>By {supplier}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
