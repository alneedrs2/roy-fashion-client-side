import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { inventoryId } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const { register } = useForm();

  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  });

  // handle deliver

  const handleDelivered = () => {
    let deliver = 1;
    let quantityParse = parseInt(item.quantity);
    let quantity = quantityParse - deliver;

    if (quantity > -1) {
      const productInfo = {
        name: item.name,
        description: item.description,
        price: item.price,
        img: item.img,
        supplier: item.supplier,
        quantity: quantity,
      };

      const url = `http://localhost:5000/product/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setItem(productInfo);
        });
      navigate("/inventory/" + inventoryId);
    } else {
      alert("This Product is Sold Out");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let currentQuantity = event.target.quantity.value;
    let currentValue = parseInt(currentQuantity);
    let quantityParse = parseInt(item.quantity);
    let quantity = quantityParse + currentValue;

    event.target.quantity.value = "";

    if (quantity > 0) {
      const productInfo = {
        name: item.name,
        description: item.description,
        price: item.price,
        img: item.img,
        supplier: item.supplier,
        quantity: quantity,
      };
      const url = `http://localhost:5000/product/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setItem(productInfo);
        });
      navigate("/inventory/" + inventoryId);
    }
  };

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
        <button
          onClick={() => handleDelivered(item._id)}
          className="btn btn-danger"
        >
          Delivered
        </button>
      </Card>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column mt-3 w-50 m-auto"
      >
        <input
          className="mb-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="btn btn-danger"
          type="submit"
          value="Restock the item"
        />
      </form>
    </div>
  );
};

export default ProductDetail;
