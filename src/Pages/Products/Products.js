import React from "react";
import useProducts from "../../hooks/useProducts";
import SingleProduct from "../SingleProduct/SingleProduct";
import './Products.css'

const Products = () => {
  const [products, setProducts] = useProducts();
  return (
    <div id="inventory" className="container">
      <h1 className="product-title text-center m-5">Inventory</h1>
      <div className="row mt-3">
        {products.slice(0,6).map((product) => (
             <SingleProduct key={ product.key} product = {product}></SingleProduct> 
        ))}
      </div>
    </div>
  );
};

export default Products;
