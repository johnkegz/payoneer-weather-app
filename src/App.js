import React from "react"
import "./App.css"
import WeatherInfo from './containers/weatherInfo';
require('dotenv').config()

function App(props) {
  return (
      <WeatherInfo />
  )
}

export default App
