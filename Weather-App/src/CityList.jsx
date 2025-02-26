import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import TurkeyMap from 'turkey-map-react';
import { getWeatherData } from './redux/WeatherDataSlice';
import cityData from '../src/JsonData/CityList.json'
import '../src/css/cityList.css'
import { useNavigate } from "react-router-dom";

function CityList() {

    const [view, setView] = useState("list");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchCity = (name) => {
        dispatch(getWeatherData(name))
    }

    const handleCityClick = (name) => {
        navigate(`/city/${name}`);
    }




    return (
        <div>
            <div className='btn'>
                <button className='city' onClick={() => setView('list')}>Şehir Listesi</button>
                <button className='map' onClick={() => setView('map')}>Harita</button>

            </div>
            {view == 'map' && (<div className='map'>
                <TurkeyMap onClick={({ plateNumber, name }) =>
                    handleCityClick(name)} />
            </div>
            )}
            {view == 'list' && (
                <div className='list'>
                    {cityData.map((city, plate) => (
                        <span onClick={()=>handleCityClick(city.name)} className='cityButton' key={plate}>{city.id}: {city.name}</span>
                    ))}

                </div>
            )}


        </div>
    )
}

export default CityList