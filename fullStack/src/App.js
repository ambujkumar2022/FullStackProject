import './App.css';
import React,{ useEffect } from 'react';
import {urlWeather} from './endpoints';

function App() {
  
  useEffect(() => {
    
    fetch('http://localhost:5031/WeatherForecast')
    //fetch(urlWeather)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }, []);
  
  return (   
    <>
      <h1>Hello React!!!</h1>
      <p>Communicating with ASP.NET Core</p>
    </>
  );
}

export default App;
