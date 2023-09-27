import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCartThunk, addToCartThunk, removeFromCartThunk, updateCartThunk } from "../../store/cart";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.products);

  useEffect(() => {
    dispatch(loadCartThunk());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCartThunk(product));
  }

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCartThunk(productId));
  }
  
  const handleUpdateCart = (product) => {
    dispatch(updateCartThunk(product));
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="flex flex-col items-center">
        { cart.length === 0 ? (
        <p className="text-xl">Your cart is empty</p> 
        ) : (
        cart.map(product => (
          <div key={product.id} className="flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-1/4"/>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg">${product.price}</p>
            <p className="text-lg">{product.description}</p>
            <div className="flex gap-x-2">
              <button onClick={() => handleRemoveFromCart(product.id)}>
                <i className="fa-solid fa-minus-circle flex items-center"></i>
              </button>
              <p className="text-lg">{product.quantity}</p>
              <button onClick={() => handleAddToCart(product)}>
                <i className="fa-solid fa-plus-circle flex items-center"></i>
              </button>
            </div>
            <button onClick={() => handleUpdateCart(product)}>
              <i className="fa-solid fa-cart-shopping flex items-center"></i>
            </button>
          </div>
        )
        ))}
      </div>
    </div>
  )
}

export default CartPage;
