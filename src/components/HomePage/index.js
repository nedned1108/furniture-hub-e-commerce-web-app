import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkLoadData } from '../../store/data'
import { addToCartThunk } from '../../store/cart'
import { updateCartThunk } from '../../store/cart'

const HomePage = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data.data);
  const cart = useSelector(state => state.cart.products);
  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(thunkLoadData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    const found = cart.find(product => product.id === item.id);
    if (found) {
      found.quantity += 1;
      dispatch(updateCartThunk(found));
      return;
    } else {
      const product = {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image_url,
        quantity: 1
      }
      dispatch(addToCartThunk(product));
    }
  }
  return (
    <div className='mt-10 ml-[10vw] mr-[10vw]'>
      {data && data.products.map((item) => 
        <div key={item.id} className='flex mb-5 pb-3 w-[70vw] justify-around border-b-2 border-gray-300'>
          <div className='w-40 h-30'>
            <img className='w-[6vw] h-[10vh] object-fill' src={item.image_url} alt={item.name} />
          </div>
          <div className='w-[60vw]'>
            <h1 className='text-xl'>{item.name}</h1>
            <h3 className='text-xl font-bold'>${item.price}</h3>
            <h2>{item.description}</h2>
          </div>
          {currentUser && 
            <button  
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10'
              onClick={() => handleAddToCart(item)}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          }
        </div>
      )}
    </div>
  )
}

export default HomePage;
