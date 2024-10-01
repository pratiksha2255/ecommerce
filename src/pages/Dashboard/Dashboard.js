import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { incrementcart } from "../../stores/slices";

function Dashboard() {
  let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart(product) {
    dispatch(incrementcart());
    cart_items.push(product);
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
    console.log("first", cart_items);
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
      {/* <h2>Products</h2> */}
      <div className="products-container ">
        {products.length > 0 ? (
          products.slice(0, 4).map((product) => (
            <div key={product.id}>
              <h4>{product.title}</h4>
              <img className="img" src={product.image} />
              <br></br>
              <p>Price: ${product.price}</p>
              <button
                className="viewbtns"
                onClick={() => viewProduct(product.id, product)}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button className="btns" onClick={() => addToCart(product)}>
                <FontAwesomeIcon icon={faShoppingCart} /> {/* Cart Icon */}
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

export default Dashboard;
