import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../redux/WeatherDataSlice'; // Redux slice fonksiyonu
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import '../css/weatherInfoWeekly.css'

function WeatherInfoWeekly() {
    const dispatch = useDispatch();
    const { cityName } = useParams();
    const { weatherData, loading, error } = useSelector((state) => state.weather)




    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress size='3rem' />
            </div>
        )
    }
    if (error) {
        return <p>Hava Durumu Şuan Gösterilemiyor.</p>
    }

    return (
        <div>
            <h2 className='weeklyTitle'>Haftalık Hava Durumu</h2>
            <div className='weatherCard'>
                {weatherData?.list?.filter((day, index) => index % 8 === 0).map((day, index) => {
                    const temp = day.main.temp.toFixed(1);
                    const date = new Date(day.dt * 1000).toLocaleDateString();
                    const dayName = new Date(day.dt * 1000).toLocaleDateString('tr-TR', { weekday: 'long' });
                    const icon = day.weather[0].icon;
                    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
                    const desc = day.weather[0].description;
                    return (
                        <span className='card' key={index} style={{ marginBottom: '10px' }}>
                            <p>{dayName}</p>
                            <img src={iconUrl} alt="" />
                            <p>{temp}°C</p>
                            <p>{desc}</p>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
export default WeatherInfoWeekly;