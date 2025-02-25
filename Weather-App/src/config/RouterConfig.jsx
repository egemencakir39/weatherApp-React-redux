import React from 'react'
import CityWeather from '../Pages/CityWeather'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/city/:cityName' element={<CityWeather />} />
        </Routes >
    )
}

export default RouterConfig