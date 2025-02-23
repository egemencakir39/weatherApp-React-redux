import {configureStore} from '@reduxjs/toolkit';
import WeatherDataReducer from '../redux/WeatherDataSlice';


export default configureStore({
    reducer: {
        weather: WeatherDataReducer,
    }
})
