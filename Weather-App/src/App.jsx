import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherData from './WeatherData'
import WeatherDisplay from './WeatherDisplay'

function App() {

  return (
    <div>
      <WeatherData/>
      <WeatherDisplay/>
    </div>
  )
}

export default App
