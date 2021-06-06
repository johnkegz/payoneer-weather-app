import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILURE,
  } from "../types/weatherInfoTypes";

export const getWeatherInfo = () => async (dispatch) => {
    dispatch({type: GET_WEATHER_REQUEST});
    const url = process.env.REACT_APP_OPEN_WEATHER_MAP_URL || "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40";
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        return dispatch({type: GET_WEATHER_SUCCESS, payload: data })
    }).catch(error => {
        return dispatch({type: GET_WEATHER_FAILURE, payload: error })
    });
  };
