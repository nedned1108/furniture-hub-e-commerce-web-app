import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkLoadData } from '../../store/data'
import { addToCartThunk } from '../../store/cart'

const HomePage = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data.data);

  useEffect(() => {
    dispatch(thunkLoadData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image_url,
      quantity: 1
    }
    dispatch(addToCartThunk(product));
  }
  return (
    <div className='mt-10 ml-5'>
      {data && data.products.map((item) => 
        <div key={item.id} className='flex mb-5 w-[80vw]'>
          <div className='w-40 h-30 mr-6'>
            <img className='object-fill' src={item.image_url} alt={item.name} />
          </div>
          <div>
            <h1 className='text-xl'>{item.name}</h1>
            <h3 className='text-xl font-bold'>${item.price}</h3>
            <h2>{item.description}</h2>
          </div>
          <button  
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10'
            onClick={() => handleAddToCart(item)}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default HomePage;
