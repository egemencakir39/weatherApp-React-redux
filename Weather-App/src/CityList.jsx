import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import TurkeyMap from 'turkey-map-react';
import { getWeatherData } from './redux/WeatherDataSlice';
import cityData from '../src/JsonData/CityList.json'

function CityList() {

    const [view, setView] = useState("list");
    const dispatch = useDispatch();
    const searchCity = (name) => {
        dispatch(getWeatherData(name))
    }




    return (
        <div>
            <div className='btn'>
                <button onClick={() => setView('list')}>Şehir Listesi</button>
                <button onClick={() => setView('map')}>Harita</button>

            </div>
            {view == 'map' && (<div className='map'>
                <TurkeyMap onClick={({ plateNumber, name }) =>
                    searchCity(name)} />
            </div>
            )}
            {view == 'list' && (
                <div className='list'>
                    {cityData.map((city, plate) => (
                        <li key={plate}>{city.id}:{city.name}</li>
                    ))}

                </div>
            )}


        </div>
    )
}

export default CityList