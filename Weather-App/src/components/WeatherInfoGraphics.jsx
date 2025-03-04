import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import '../css/WeatherInfoGraphics.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';





function WeatherInfoGraphics() {
    const {weatherData, loading, error} = useSelector((state) => state.weather);
    const temperatures = weatherData?.list?.slice(0, 5).map((weatherItem) => weatherItem.main.temp.toFixed(1));
    const hours = weatherData?.list?.slice(0,5).map((weatherItem) => {
        const date = new Date(weatherItem.dt * 1000); 
        return `${date.getHours()}`; 
    });
    
    if (!temperatures || !hours) {
        return null
    }
  return (
    <div>
    <LineChart className='chart'
      xAxis={[{ data: hours }]}
      series={[
        {
          data: temperatures,
        },
      ]}
      width={800}
      height={500}
    />

    </div>
    
  )
}

export default WeatherInfoGraphics