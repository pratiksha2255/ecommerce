import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./ProductListing.css"; // Import a CSS file for custom styles

function ProductListing() {
  const { id } = useParams(); // to retrieve the product id from the URL
  const location = useLocation();
  const { product } = location.state || {}; // Access the passed product from state

  return (
    <>
      <div className="product-details-container">
        <h2 className="product-title">Product Details</h2>
        {product ? (
          <div className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
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

export default ProductListing;
