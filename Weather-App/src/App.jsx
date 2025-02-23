import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherData from './WeatherData'
import WeatherDisplay from './WeatherDisplay'
import CityList from './cityList'
import Header from './Header'

function App() {

  return (
    <div>
      <Header />
      <CityList />
      <WeatherDisplay />

    </div>
  )
}

export default App
