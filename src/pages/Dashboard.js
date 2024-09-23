import React, { useEffect, useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState("false");

  function addToCart() {
    setCart(true);
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
            <div className="product-card" key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <img className="img" src={product.image} alt={product.title} />

              {cart == "false" ? (
                <button onClick={addToCart}>Add to Cart</button>
              ) : (
                <button>Item added to Cart</button>
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
