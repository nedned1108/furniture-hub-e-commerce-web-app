import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkLoadData } from "../../store/data";
import { loadCartThunk, addToCartThunk, removeFromCartThunk, updateCartThunk } from "../../store/cart";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import ConfirmationModal from "../ConfirmationModal";

function CartPage() {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.products);
  const currentUser = useSelector(state => state.session.user);
  const cart = carts.filter(product => product.user_id === currentUser.id);
  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const today = new Date();
  const receipt = {
    user_id: currentUser.id,
    products: cart,
    subtotal: (subtotal > 2000) ? (subtotal - subtotal * 0.1) : subtotal,
    confirmationNum: Math.floor(Math.random() * 1000000000),
    date: today.toDateString()
  }

  useEffect(() => {
    dispatch(loadCartThunk());
    dispatch(thunkLoadData());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (cart.includes(product)) {
      product.quantity += 1;
      dispatch(updateCartThunk(product));
      return;
    } else {
      dispatch(addToCartThunk(product));
    }
  }

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCartThunk(productId));
  }

  const handleUpdateCart = (product) => {
    if (product.quantity === 1) {
      dispatch(removeFromCartThunk(product.id));
      return;
    } else {
      product.quantity -= 1;
      dispatch(updateCartThunk(product));
    }
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
                <div key={product.id} className="flex justify-between mb-5 px-5 pt-5 pb-5 h-[13vh] w-[70vw] border-2 border-gray-300">
                  <div className='w-[1/3] h-20 mr-6 flex'>
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-fill mr-10" />
                    <div className="mr-5 w-[30vw]">
                      <h2 className="text-xl font-bold">{product.name}</h2>
                      <p className="text-lg">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-x-2">
                      <button onClick={() => handleAddToCart(product)}>
                        <i className="fa-solid fa-plus-circle flex items-center"></i>
                      </button>
                      <p className="text-lg">Qty: {product.quantity}</p>
                      <button onClick={() => handleUpdateCart(product)}>
                        <i className="fa-solid fa-minus-circle flex items-center"></i>
                      </button>
                    </div>
                    <button onClick={() => handleRemoveFromCart(product.id)} className="flex justify-center rounded-md hover:bg-gray-300 bg-gray-200">
                      Remove
                    </button>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">${(product.price * product.quantity).toFixed(2)}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cart.length === 0 ? (
            ""
          ) : (
            <div className="border-gray-300 border-2 px-5 h-[10vh]">
              {
                subtotal > 2000 ? (
                  <>
                    <p className="text-xl font-bold">Discount: 10%</p>
                    <p className="text-xl font-bold">Subtotal: ${(subtotal - subtotal * 0.1).toFixed(2)}</p>
                  </>
                ) : (
                    <p className="text-xl font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
                )
              }
              <OpenModalMenuItem
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-full list-none flex justify-center"
                itemText={"Checkout"}
                modalComponent={<ConfirmationModal receipt={receipt} />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartPage;
