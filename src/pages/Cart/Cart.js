import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { decrementcart } from "../../stores/slices";

function CartPage() {
  const [cartItems, setcartItems] = useState([]);
  const dispatch = useDispatch();
  // const totalPrice = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );

  function removeFromCart(item) {
    dispatch(decrementcart());
    cartItems.pop(item);
    localStorage.setItem("cart_items", JSON.stringify(cartItems));
  }

  useEffect(() => {
    setTimeout(() => {
      setcartItems(JSON.parse(localStorage.getItem("cart_items")));
    }, 1000);
  });

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems &&
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                {/* <p>Quantity: {item.quantity}</p> */}
                <p>Price: ${item.price}</p>
                {/* <p>Total: ${item.price * item.quantity}</p> */}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Cart Summary</h3>
          <p>Total Items: {cartItems.length}</p>
          {/* <p>Total Price: ${totalPrice.toFixed(2)}</p> */}
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
