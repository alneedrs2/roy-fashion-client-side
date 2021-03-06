import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
  const {_id, name, img, description, price, quantity, supplier } = product;
  
  const navigate = useNavigate();
  const navigateToProductDetail = id =>{
     navigate(`/inventory/${id}`)
  }
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 g-5">
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
        <button onClick={() => navigateToProductDetail(_id)} className="card-btn">Update</button>
      </Card>
    </div>
  );
};

export default SingleProduct;
