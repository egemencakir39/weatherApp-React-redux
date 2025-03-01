import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getWeatherData } from '../redux/WeatherDataSlice';
import CircularProgress from '@mui/material/CircularProgress';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AirIcon from '@mui/icons-material/Air';
import CompressIcon from '@mui/icons-material/Compress';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import '../css/cityWeather.css';

function WeatherInfoDaily() {
    const { cityName } = useParams();
    const dispatch = useDispatch();
    const { weatherData, loading, error } = useSelector((state) => state.weather);

    useEffect(() => {
        dispatch(getWeatherData(cityName));
    }, [cityName, dispatch]);

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress size="3rem" />
            </div>
        );
    }

    if (error) {
        return <p>Hava Durumu Şu An Gösterilemiyor.</p>;
    }

    if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
        return <p>Veri bulunamadı.</p>;
    }

    const firstWeather = weatherData.list[0];

    if (!firstWeather || !firstWeather.weather || firstWeather.weather.length === 0) {
        return <p>Hava durumu verisi eksik.</p>;
    }

    const iconCode = firstWeather.weather[0]?.icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    return (
        <div className='txt'>
            <h1 className='cityTitle'>
                <AddLocationIcon style={{ marginRight: '1rem', fontSize: '48px' }} /> {weatherData.city?.name}
            </h1>
            <div className='upInfo'>
                <img src={iconUrl} alt="Hava Durumu İkonu" />
                <p className='heat'>{firstWeather.main?.temp?.toFixed(1) ?? "N/A"}°</p>
                <p className='feelsHeat'>Hissedilen: {firstWeather.main?.feels_like?.toFixed(1) ?? "N/A"}°C</p>
            </div>
            <p style={{ fontSize: '20px' }}>
                {firstWeather.weather[0]?.description
                    ? firstWeather.weather[0].description.charAt(0).toUpperCase() + firstWeather.weather[0].description.slice(1)
                    : "Bilgi yok"}
            </p>

            <div className='bottomInfo'>
                <WaterDropIcon /><p>{firstWeather.main?.humidity ?? "N/A"}%</p>
                <AirIcon /><p>{firstWeather.wind?.speed?.toFixed(2) ?? "N/A"} m/s</p>
                <CompressIcon /><p>{firstWeather.main?.pressure ?? "N/A"} hPa</p>
            </div>
        </div>
    );
}

export default WeatherInfoDaily;