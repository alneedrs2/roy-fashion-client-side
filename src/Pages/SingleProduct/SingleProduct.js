import React from "react";
import { Card } from "react-bootstrap";

const SingleProduct = ({ product }) => {
  const { name, img, description, price, expire } = product;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <h2 className="price-expire">${price}</h2>
          <p className="price-expire">{expire}</p>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <p>Available Quantity: {product.quantity}</p>
            <p>By {product.supplier}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
