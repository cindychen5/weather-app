import React, {useEffect, useState} from "react"
// import {Container, Card, CardDeck} from "react-bootstrap";
import "./Home.css"
import Weather from "./components/weather"


export const Home = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${process.env.WEATHER_FORECAST_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.WEATHER_FORECAST_OPEN_WEATHER_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();
    }, [lat, long])

    return (
        <>
            <h1>Weather App</h1>
            <div>
                {(typeof data.main != 'undefined') ? (
                    <Weather weatherData={data}/>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    )
}