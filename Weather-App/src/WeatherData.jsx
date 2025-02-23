import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { getWeatherData } from './redux/WeatherDataSlice';

function WeatherData() {

const [cityName,setCityName] = useState('');
const dispatch = useDispatch();

const handleSearch = () =>{
    if (cityName.trim() !== '') {
        dispatch(getWeatherData(cityName))
    }
}

  return (
    <div>
        <div className='form'>
            <input type="text" placeholder='Şehir Giriniz..' value={cityName} onChange={(e)=> setCityName(e.target.value)} />
            <button onClick={handleSearch} >Ara</button>
        </div>
    </div>
  )
}

export default WeatherData