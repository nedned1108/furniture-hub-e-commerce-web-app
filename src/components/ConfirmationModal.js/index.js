import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";

function ConfirmationModal({ receipt }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleConfirm = () => {
    dispatch(action);
    closeModal();
  }

  return (
    <>
      <div className="bg-white rounded-lg w-80 h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl pb-10">Confirmation</h1>
        <div>
          {receipt.products.map(product => (
            <div key={product.id} className="flex justify-between mb-5 px-5 pt-5 pb-5 h-[13vh] w-[70vw] border-2 border-gray-300">
              <div className="flex flex-col justify-between">
                <p className="text-xl">{product.name}</p>
                <p className="text-xl">Quantity: {product.quantity}</p>
                <p className="text-xl">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-between">
            <p className="text-xl">Subtotal: ${receipt.subtotal}</p>
          </div>
        </div>
        <div className="flex justify-around w-full pt-10">
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
