import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from "../types/weatherInfoTypes";

const INITIAL_STATE = {
  weatherInfo: [],
  error: {},
  isFetching: true
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case GET_WEATHER_SUCCESS:
      let sortedWeatherDays = [] ;
      let sortedWeatherDates = [] ;
      for(let i of action.payload.list){
        if(sortedWeatherDates.includes(new Date(i.dt * 1000).toLocaleDateString())){
          for(let j of sortedWeatherDays){
            if(j.date === new Date(i.dt * 1000).toLocaleDateString()){
                j.weatherSegments.push(i)
            }
          }
        }
        else{
          sortedWeatherDates.push(new Date(i.dt * 1000).toLocaleDateString())
          sortedWeatherDays.push({
            date: new Date(i.dt * 1000).toLocaleDateString(), 
            weatherSegments: [i],
            rawDate: i.dt
          })
        }  
      }
      
      return {
        ...state,
        weatherInfo: sortedWeatherDays,
        isFetching: false
      };

    case GET_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default reducer;
