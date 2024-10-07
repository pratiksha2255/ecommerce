import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementcart } from "../../stores/slices";
import { getProducts } from "../../stores/productsStore";
import { getPaginatedProducts } from "../../stores/paginationStore";

function Products() {
  let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
  const products = useSelector((state) => state.productsStore.productList);
  const final_products = useSelector(
    (state) => state.paginatedStore.productList
  );
  const [searchQuery, setSearchQuery] = useState("");
  const limit = Number(10);
  const [skip, setSkip] = useState(0);

  useEffect(() => {}, [products]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSkip(0);
  };

  function addToCart(product) {
    dispatch(incrementcart());
    cart_items.push(product);
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
  }

  function viewProduct(id, product) {
    navigate(`/productDetails/${id}`, { state: { product } });
  }

  useEffect(() => {
    dispatch(getProducts(searchQuery));
  }, [searchQuery]);

  useEffect(() => {
    dispatch(getPaginatedProducts(skip));
  }, [skip]);

  const totalPages = Math.ceil(products.length / limit);
  const handlePageChange = (event) =>
    setSkip(Number(limit * event.target.value) - limit);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="pagination-dropdown">
        <label htmlFor="pagination">Select Page: </label>
        <select id="pagination" value={setSkip} onChange={handlePageChange}>
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              Page {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="products-container ">
        {final_products.length > 0 ? (
          final_products.map((product) => (
            <div key={product.id}>
              <h4>{product.title}</h4>
              <img
                alt=""
                className="Girl in a jacket"
                src={product.thumbnail}
                onClick={() => viewProduct(product.id, product)}
              />
              <br></br>
              <p>Price: ${product.price}</p>
              <button className="btns" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="loading-text">No product found...</p>
        )}
      </div>
    </>
  );
}

export default Products;
