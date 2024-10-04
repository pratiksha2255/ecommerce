import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.style.css"; // Import a CSS file for custom styles

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div className="product-details-container">
        <h2 className="product-title">Product Details</h2>
        {product ? (
          <div className="product-card">
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">Price: ${product.price}</p>
              <p className="description">{product.description}</p>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        ) : (
          <p className="not-available">Product details not available.</p>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
