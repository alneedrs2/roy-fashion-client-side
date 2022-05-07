import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { register } = useForm();
  const { inventoryId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  });

  // handle deliver

  const handleDelivered = () =>{
    
  }
  return (
    <div className="mt-3">
      <Card className="card-detail">
        <Card.Img className="product-img" variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>Product Name: {item.name}</Card.Title>
          <h4>Price: ${item.price}</h4>
          <Card.Text>Description: {item.description}</Card.Text>
          <p>
            Available Quantity: {item.quantity} <br />
            Supplier: {item.supplier}
          </p>
        </Card.Body>
        <button className="btn btn-danger">Delivered</button>
      </Card>
      <form className="d-flex flex-column mt-3 w-50 m-auto">
        <input
          className="mb-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input className="btn btn-danger" type="submit" value="Restock the item" />
      </form>
    </div>
  );
};

export default ProductDetail;
