import { INCREMENT, DECREMENT } from '../types/counterTypes';
export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};