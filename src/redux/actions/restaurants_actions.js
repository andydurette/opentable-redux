import axios from 'axios'
import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE
} from './restaurantsTypes';

export function fetchRestaurants(val){
  var url = `http://opentable.herokuapp.com/api/restaurants?city=${val}`;
  // Returns a function so that it doesn't have to be a pure function allowing asynconisity
  return (dispatch) => {
    // Sets loading screen until pass or failure is determined
    dispatch(fetchRestaurantsRequest());
    // Runs data call
    return axios.get(url)
      .then(response => dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: response.data }))
      .catch(error =>  dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: error.message}))
  }
}

export const fetchRestaurantsRequest = () => {
  return {
    type: FETCH_RESTAURANTS_REQUEST
  }
}