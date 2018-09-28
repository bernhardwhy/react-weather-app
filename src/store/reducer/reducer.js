import * as actionTypes from '../actions/actionTypes'

const initalState = {

}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_OFFERS:
            console.log(action.products);
            const sortedWeatherData = {
                days: [],
            };
            action.products.forEach(element => {
                // sortedWeatherData.days
            });
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}

export default reducer;