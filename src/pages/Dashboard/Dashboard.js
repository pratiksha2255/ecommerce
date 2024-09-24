import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  function addToCart(id) {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: true,
    }));
  }

  function viewProduct(id, product) {
    navigate(`/product_listing/${id}`, { state: { product } });
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <img src="/shopping.webp" className="banner" alt="Shopping banner"></img>
      <h2>Products</h2>
      <div className="products-container">
        {products.length > 0 ? (
          products.slice(0, 4).map((product) => (
            <div key={product.id}>
              <h4>{product.title}</h4>
              <img className="img" src={product.image} />
              <br></br>
              <p>Price: ${product.price}</p>

              <button
                className="btns"
                onClick={() => viewProduct(product.id, product)}
              >
                View Product
              </button>

              {!cart[product.id] ? (
                <button className="btns" onClick={() => addToCart(product.id)}>
                  Add to Cart
                </button>
              ) : (
                <button disabled>Item added to Cart</button>
              )}
            </div>
          ))
        ) : (
          <p className="loading-text">Loading products...</p>
        )}
      </div>
    </>
  );
}

export default Dashboard;
