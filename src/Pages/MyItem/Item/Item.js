import React from "react";
import { Card } from "react-bootstrap";

const Item = ({ item }) => {
  const { name, img, description, price, quantity, supplier } = item;
  return (
    <Card className="card-detail">
      <Card.Img className="product-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <h2>${price}</h2>
        <Card.Text>{description}</Card.Text>
        <p>
          Available Quantity: {quantity} <br />
          By {supplier}
        </p>
      </Card.Body>
    </Card>
  );
};

export default Item;
