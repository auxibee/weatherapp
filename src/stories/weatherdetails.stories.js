import React from 'react';
import WeatherDetails from '../components/weatherdetails/weatherdetails';

export default {
    component : WeatherDetails,
    title : 'WeatherDetails'
}

export const  DefaultWeatherDetails = () => <WeatherDetails description="Rain" temperature={10}/>