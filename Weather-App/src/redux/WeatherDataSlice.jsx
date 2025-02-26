import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    weatherData: [],
    loading: false,
    error: null
}
export const getWeatherData = createAsyncThunk('weatherData', async (cityName) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=16a51ee406309a38e45ef48c1951dfd0&units=metric&lang=tr`)
    console.log(response.data)
    return response.data;
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getWeatherData.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherData = action.payload;
            })
            .addCase(getWeatherData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default weatherSlice.reducer