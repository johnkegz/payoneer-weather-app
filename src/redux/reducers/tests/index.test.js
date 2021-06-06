import weatherReducer from "../weatherReducer";
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../../types/weatherInfoTypes";

describe("Weather Reducer", () => {
  const initialState = {
    weatherInfo: [],
    error: {},
    isFetching: true,
  };

  it("Weather reducer returns state with isFetching true for GET_WEATHER_REQUEST", (done) => {
    const action = {
      type: GET_WEATHER_REQUEST,
    };
    expect(weatherReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
    });
    done();
  });
  it("Weather reducer returns state with isFetching false for GET_WEATHER_SUCCESS and weatherInfo information", (done) => {
    const action = {
      type: GET_WEATHER_SUCCESS,
      payload: { list: [] },
    };
    expect(weatherReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      weatherInfo: [],
    });
    done();
  });
});
