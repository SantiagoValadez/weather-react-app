import React, {useState} from "react";
import Form from "./Form";
import Card from "./Card";

const WeatherPanel = () =>{
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=1ed9d8309a43d395807784aba0af0f31&lang=es&units=metric'
    let cityUrl = '&q=';

    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=1ed9d8309a43d395807784aba0af0f31&lang=es&units=metric'

    const [weather, setWeather] = useState ([]);
    const [forecast, setForecast] = useState ([]);
    const [loading, setLoading] = useState (false);
    const [show, setShow] = useState (false);
    // const [location, setLocation] = useState ('');

    const getLocation = async (loc) => {
        console.log('datos recibidos', loc)
        setLoading(true);
        // setLocation(loc);

        //weather

        const urlWeatherRequest = urlWeather + cityUrl + loc;
            console.log(urlWeatherRequest);
        await fetch(urlWeatherRequest).then((response)=>{
            if (!response.ok) throw new Error("Algo salio mal weather")
            return response.json();
        }).then ((weatherData)=>{
            console.log('datos ciudad', weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        urlForecast = urlForecast + cityUrl + loc;
        await fetch(urlForecast).then((response)=>{
            if (!response.ok) throw new Error('algo salio mal forecast')
            return response.json();
        }).then ((forecastData)=>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return (
        <React.Fragment>
            <Form
                newLocation = {getLocation}
                />
                <Card
                    showData = {show}
                    loadingData = {loading}
                    weather = {weather}
                    forecast = {forecast}
                />

        </React.Fragment>

    );
}

export default WeatherPanel;