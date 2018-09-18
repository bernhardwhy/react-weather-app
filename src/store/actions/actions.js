import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as weatherData from '../weather.json'

export const saveOffers = (products) => {
    return {
        type: actionTypes.SAVE_OFFERS,
        products: products
    }
}

export const getOffers = () => {
    return dispatch => {
        // http://api.openweathermap.org/data/2.5/forecast?q=Vienna,aut&units=metric&appid=0bee7f603cebdac682463d1983e540a6
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                console.log(response);
                console.log(weatherData);

                dispatch(saveOffers(response.data));
            }).catch(error => {
                console.log(error);

            });
    }
};


