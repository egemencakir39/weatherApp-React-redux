import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getWeatherData } from '../redux/WeatherDataSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../css/cityWeather.css'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AirIcon from '@mui/icons-material/Air';
import CompressIcon from '@mui/icons-material/Compress';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WeatherInfoDaily from '../components/WeatherInfoDaily';
import WeatherInfoWeekly from '../components/WeatherInfoWeekly';

function CityWeather() {

    const { weatherData, loading, error } = useSelector((state) => state.weather);



    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                    <WeatherInfoDaily />
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'white' }}> GRAFİK</p>

                </div>
            </div>

            <div>
                <WeatherInfoWeekly />
            </div>
        </div>
    );
}
export default CityWeather