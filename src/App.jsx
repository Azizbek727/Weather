import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import Current from './components/current'
import { useDispatch, useSelector } from 'react-redux'
import { getLatLon } from './store/features/weather'
import Daily from './components/daily'
import { images } from './assets/image'

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    setTimeout(() => {
      dispatch(getLatLon('Tashkent'))
    }, 100);
  }, [])

  const weather = useSelector((state)=>state.weather.weather)
  // console.log(weather.current);
  return weather ?  (
    <div className='container'>
      
      <Navbar/>
      <Current/>
      <Daily/>
    </div>
  ): <div className='loading'>
    <img src={images.loading} alt="" />
  </div>
}

export default App