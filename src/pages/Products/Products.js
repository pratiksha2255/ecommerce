import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import { useDispatch } from "react-redux";
import { incrementcart } from "../../stores/slices";

function Products() {
  let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([""]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navLinkStyle = {
    color: "rgb(6 17 7)",
    float: "bold",
    marginRight: "50px",
  };
  function addToCart(product) {
    dispatch(incrementcart());
    cart_items.push(product);
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
    console.log("first", cart_items);
  }

  function viewProduct(id, product) {
    navigate(`/productDetails/${id}`, { state: { product } });
  }
  const api_url = `https://dummyjson.com/products`;
  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data, "response");
      });
  }, []);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          // value={searchTerm}
          // onChange={handleSearch}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="products-container ">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <h4>{product.title}</h4>
              <img
                className="img"
                src={product.thumbnail}
                onClick={() => viewProduct(product.id, product)}
              />
              <br></br>
              <p>Price: ${product.price}</p>
              <button className="btns" onClick={() => addToCart(product)}>
                Add to Cart {/* Cart Icon */}
              </button>
            </div>
          ))
        ) : (
          <p className="loading-text">Loading products...</p>
        )}
      </div>
    </>
  );
}

export default Products;
