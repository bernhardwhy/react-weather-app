import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as weatherData from '../darksky_weather.json'

export const saveOffers = (weather) => {
    return {
        type: actionTypes.SAVE_OFFERS,
        weather: weather
    }
}

export const getOffers = () => {
    return dispatch => {
        //https://api.darksky.net/forecast/0fada81dba1f29269d66acfdffeee0db/48.281986,%2016.383277?exclude=minutes,hourly&units=auto&lang=de
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                console.log(response);
                console.log(weatherData);
                dispatch(saveOffers(weatherData));
            }).catch(error => {
                console.log(error);

            });
    }
};


