import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { inventoryId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  });

  return (
    <div>
      <h1>Product Name : {service.name}</h1>
    </div>
  );
};

export default ProductDetail;
