import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkLoadData } from '../../store/data'

const HomePage = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data.data);

  useEffect(() => {
    dispatch(thunkLoadData());
  }, [dispatch]);
  return (
    <div className='mt-10 ml-5'>
      {data && data.products.map((item) => 
        <div key={item.id} className='flex w-30 h-30 mb-10'>
          <img className='w-20 h-20' src={item.image_url} alt={item.name} />
          <div>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.price}</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage;
