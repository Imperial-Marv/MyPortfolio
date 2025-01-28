"use client";

import React, { useState, useEffect } from "react";
import "../styles/weatherforecast.css";

// Define types
interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

export default function WeatherForecastApp() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchWeatherByLocation = async (lat: number, lon: number) => {
      const apiKey = "b7094c077fdeda09de6909c07e83e3d2"; // Replace with your OpenWeatherMap API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Unable to fetch weather for your location");
        }
        const data: WeatherData = await response.json();
        setWeatherData(data);
        setError("");
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
        setWeatherData(null);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByLocation(latitude, longitude);
          },
          () => {
            setError("Location access denied. Please search for a city manually.");
          }
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };

    getLocation();
  }, []);

  const fetchWeatherData = async (cityName: string) => {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
      setError("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      setWeatherData(null);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeatherData(city);
    }
  };

  const renderWeatherAnimation = (weather: { main: string; temp: number }) => {
    if (!weather) return null;
    const condition = weather.main;

    if (condition === "Clear" && weather.temp > 30) {
      return <div className="weather-animation hot">🌞</div>;
    } else if (condition === "Clear" && weather.temp < 15) {
      return <div className="weather-animation cold">❄️</div>;
    } else if (condition.includes("Rain")) {
      return <div className="weather-animation rainy">🌧️</div>;
    } else if (condition.includes("Fog") || condition.includes("Mist")) {
      return <div className="weather-animation foggy">🌫️</div>;
    }

    return null;
  };

  return (
    <div className="weather-app-page">
      <header className="weather-app-header">
        <h1>Weather Forecast</h1>
      </header>

      <main className="weather-app-main">
        <section className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </section>

        {error && <p className="error-message">{error}</p>}

        {weatherData && (
          <section className="weather-info">
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Forecast: {weatherData.weather[0].description}</p>
            {renderWeatherAnimation({  main: weatherData.weather[0].main,  temp: weatherData.main.temp})}
          </section>
        )}
      </main>
    </div>
  );
}
