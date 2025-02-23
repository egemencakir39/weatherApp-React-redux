import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function WeatherDisplay() {
    const {weatherData,loading,error} = useSelector((state)=>state.weather);

    if (loading) {
        return <p>Yükleniyor...</p>
    }
    if (error) {
        return <p>Şehir bulunamadı</p>
        
    }
  return (
    
    <div>{weatherData.name}</div>
  )
}

export default WeatherDisplay