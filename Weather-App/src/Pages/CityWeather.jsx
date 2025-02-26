import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getWeatherData } from '../redux/WeatherDataSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function CityWeather() {

    const { cityName } = useParams();
    const dispatch = useDispatch();
    const { weatherData, loading, error } = useSelector((state) => state.weather)

    const getCityData = () => {
        dispatch(getWeatherData(cityName));
    }
    useEffect(() => {
        getCityData();
    }, [cityName, dispatch])
    if (!weatherData) {
        return null;
    };
    if (loading) {
        return  (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
             <CircularProgress color='success' size="3rem"/>
            </div>
    )
       
    }
    if (error) {
        return <p>Hava Durumu Şuan Gösterilemiyor.</p>
    }
    const iconCode = weatherData?.weather?.[0]?.icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;


    return (
        <div>
            <h1>Şehir: {weatherData.name}</h1>
            <p>Zaman Dilimi: {weatherData.timezone}</p>
            <p>Sıcaklık: {weatherData.main?.temp.toFixed(1)}°C</p>
            <p>Hissedilen: {weatherData.main?.feels_like.toFixed(1)}°C</p>
            <p>Nem: {weatherData.main?.humidity}%</p>
            <p>Hava Durumu: {weatherData.weather?.[0]?.description}</p>
            <p>Rüzgar Hızı: {weatherData.wind?.speed.toFixed(2)} m/s</p>
            <p>Basınç: {weatherData.main?.pressure} hPa</p>
            <img src={iconUrl} alt="Hava Durumu İkonu" />
        </div>
    )
}

export default CityWeather