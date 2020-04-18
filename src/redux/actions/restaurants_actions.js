import axios from 'axios'
import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE
} from './restaurantsTypes';


export function fetchRestaurants(val){
  var url = `http://opentable.herokuapp.com/api/restaurants?city=${val}`;
  console.log(url);
  return (dispatch) => {
    dispatch(fetchRestaurantsRequest(val));
    axios
      .get(url)
      .then(response => {
        // response.data is the Restaurants
        const Restaurants = response.data
        dispatch(fetchRestaurantsSuccess(Restaurants))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchRestaurantsFailure(error.message))
      })
  }
}


export const fetchRestaurantsRequest = () => {
  return {
    type: FETCH_RESTAURANTS_REQUEST
  }
}

export const fetchRestaurantsSuccess = Restaurants => {
  return {
    type: FETCH_RESTAURANTS_SUCCESS,
    payload: Restaurants
  }
}

export const fetchRestaurantsFailure = error => {
  return {
    type: FETCH_RESTAURANTS_FAILURE,
    payload: error
  }
}