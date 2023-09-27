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
    <div>
      <h1 className='bg-gray-500'>Home Page</h1>
    </div>
  )
}

export default HomePage;
