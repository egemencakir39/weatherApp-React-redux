import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getWeatherData } from '../redux/WeatherDataSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../css/cityWeather.css'
import WeatherInfoDaily from '../components/WeatherInfoDaily';
import WeatherInfoWeekly from '../components/WeatherInfoWeekly';
import WeatherInfoGraphics from '../components/WeatherInfoGraphics';

function CityWeather() {

    const { weatherData, loading, error } = useSelector((state) => state.weather);



    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                    <WeatherInfoDaily />
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <WeatherInfoGraphics />

                </div>
            </div>

            <div>
                <WeatherInfoWeekly />
            </div>
        </div>
    );
}export default CityWeather