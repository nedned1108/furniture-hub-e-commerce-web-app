import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ReceiptPage() {
  const receipts = useSelector(state => state.receipt.receipts);
  const currentUser = useSelector(state => state.session.user);
  const currentUserReceipt = receipts.filter(receipt => receipt.user_id === currentUser.id);

  return (
    <div className="flex flex-col justify-center mr-[10vw] ml-[10vw]">
      <h1 className="flex font-bold text-2xl pb-10 justify-center mt-5">Purchases</h1>
      {currentUserReceipt.length === 0 ? (
        <div className="flex justify-center items-center h-[50vh]">
          <h1 className="text-2xl font-bold">You have no purchases</h1>
        </div>
      ) : (
        <>
          {currentUserReceipt.map(receipt => (
            <div key={receipt.id} className="flex justify-between mb-5 px-5 pt-2 pb-2 h-auto border-2 border-gray-300">
              <div className="flex flex-col justify-between">
                <p className="text-xl">Confirmation: #{receipt.confirmationNum}</p>
                <p className="text-xl">Date: {receipt.date}</p>
                {receipt.products.map(product => (
                  <div key={product.id} className="flex justify-between px-5 pt-5 pb-5 h-[13vh] w-[70vw] border-b-2">
                  <div className='w-[1/3] h-20 mr-6 flex'>
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-fill mr-10" />
                    <div className="mr-5 w-[30vw]">
                      <h2 className="text-xl font-bold">{product.name}</h2>
                      <p className="text-lg">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-x-2">
                      <p className="text-lg">Qty: {product.quantity}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">${(product.price * product.quantity).toFixed(2)}</h2>
                  </div>
                </div>
                ))}
                <p className="text-xl font-bold">Subtotal: ${receipt.subtotal}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default ReceiptPage;
