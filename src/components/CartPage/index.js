import React, { useState, useEffect } from "react";
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

  if (cart == null) {
    return
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="flex flex-col items-center">
        <div className="flex mt-10 gap-x-5">
          {cart.length === 0 ? (
            <p className="text-xl">Your cart is empty</p>
          ) : (
            <div className="flex flex-col">
              {cart.map(product => (
                <div key={product.id} className="flex mb-5 px-5 pt-5 pb-5 h-[20vh] w-[70vw] border-2 border-gray-300">
                  <div className='w-20 h-20 mr-6'>
                    <img src={product.image} alt={product.name} className="object-fill" />
                  </div>
                  <div className="mr-5">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-lg">${product.price}</p>
                  </div>
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
              ))}
            </div>
          )}
          {cart.length === 0 ? (
            ""
          ) : (
            <div className="border-gray-300 border-2 px-5 h-[10vh]">
              <p className="text-xl font-bold">Subtotal:</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-full">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartPage;
