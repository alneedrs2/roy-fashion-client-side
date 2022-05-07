import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import SingleItem from "./SingleItem/SingleItem";

const ManageItem = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="text-center">
      <div id="inventory" className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="product-title mt-5">All Products</h1>
          <Link to="/addItem">
            <button className="add-btn px-5 my-3">Add New Item</button>
          </Link>
        </div>
        <div className="row mt-3">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-12 g-5">
              <SingleItem key={product._id} product={product}></SingleItem>
              <button
                onClick={() => handleDelete(product._id)}
                className="card-btn w-100"
              >
                Delete Item
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
