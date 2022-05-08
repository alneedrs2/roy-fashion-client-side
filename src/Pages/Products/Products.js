import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="text-center">
      <div id="inventory" className="container">
        <h1 className="product-title text-center mt-5">Inventory</h1>
        <div className="row mt-3">
          {products.slice(0, 6).map((product) => (
            <SingleProduct key={product._id} product={product}></SingleProduct>
          ))}
        </div>
      </div>
      <Link to="/manageItem">
        <button className="manage-btn w-50 my-3">Manage items</button>
      </Link>
    </div>
  );
};

export default Products;
