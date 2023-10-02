import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { addToReceiptThunk } from "../../store/receipt";
import { removeFromCartThunk } from "../../store/cart";

function ConfirmationModal({ receipt }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const carts = useSelector(state => state.cart.products);
  const cart = carts.filter(product => product.user_id === receipt.user_id);

  const handleConfirm = () => {
    dispatch(addToReceiptThunk(receipt));
    cart.forEach(product => {
      dispatch(removeFromCartThunk(product.id));
    });
    closeModal();
  }

  return (
    <>
      <div className="bg-white rounded-lg w-80 h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl pb-10">Confirmation</h1>
        <div className="overflow-x-auto">
          {receipt.products.map(product => (
            <div key={product.id} className="flex justify-between mb-5 px-5 pt-5 pb-5 h-auto border-t-2 border-gray-300">
              <div className="flex flex-col justify-between">
                <p className="text-xl">{product.name}</p>
                <p className="text-xl">Quantity: {product.quantity}</p>
                <p className="text-xl">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between border-t-2 border-black w-full px-5 font-bold pt-5">
          <p className="text-xl">Subtotal: ${receipt.subtotal}</p>
        </div>
        <div className="flex justify-around w-full pt-10 pb-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmationModal;
