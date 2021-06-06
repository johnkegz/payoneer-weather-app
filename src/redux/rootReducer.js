import { combineReducers } from 'redux';
import weather from './reducers/weatherReducer';

const rootReducer = combineReducers({
    weather,
});

export default rootReducer;
