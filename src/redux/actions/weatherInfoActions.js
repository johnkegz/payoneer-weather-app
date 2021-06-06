import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILURE,
  } from "../types/weatherInfoTypes";

export const getWeatherInfo = () => async (dispatch) => {
    dispatch({type: GET_WEATHER_REQUEST});
    const url = process.env.REACT_APP_OPEN_WEATHER_MAP_URL;
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        return dispatch({type: GET_WEATHER_SUCCESS, payload: data })
    }).catch(error => {
        return dispatch({type: GET_WEATHER_FAILURE, payload: error })
    });
  };
