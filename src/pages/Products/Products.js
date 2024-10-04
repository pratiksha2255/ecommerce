import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementcart } from "../../stores/slices";
import { getProducts } from "../../stores/productsStore";

function Products() {
  let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
  const products = useSelector((state) => state.productsStore.productList);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Adjust this to show more/less products per page
  useEffect(() => {
  }, [products]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
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
    // fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProducts(data.products);
    //   });
    dispatch(getProducts());
  }, [searchQuery]);

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Get the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);
  // Change page
  const handlePageChange = (event) =>
    setCurrentPage(Number(event.target.value));

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
        <select id="pagination" value={currentPage} onChange={handlePageChange}>
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              Page {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="products-container ">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
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
