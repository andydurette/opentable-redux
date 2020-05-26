import axios from 'axios'

export const actionTypes = {
  FETCH_RESTAURANTS_REQUEST: 'FETCH_RESTAURANTS_REQUEST',
  FETCH_RESTAURANTS_SUCCESS: 'FETCH_RESTAURANTS_SUCCESS',
  FETCH_RESTAURANTS_FAILURE: 'FETCH_RESTAURANTS_FAILURE',
  FILTER_RESTAURANT: 'FILTER_RESTAURANT'
};


/***********  Thunk actions for API call ***************/

export const fetchRestaurantsRequest = () => {
  return {
    type: actionTypes.FETCH_RESTAURANTS_REQUEST
  }
}

export const fetchRestaurantsSuccess = (restaurants) => {
  return {
    type: actionTypes.FETCH_RESTAURANTS_SUCCESS,
    payload: restaurants
  }
}

export const fetchRestaurantsFailure = (error) => {
  return {
    type: actionTypes.FETCH_RESTAURANTS_FAILURE,
    payload: error
  }
}

export function fetchRestaurants(val){
  var url = `https://opentable.herokuapp.com/api/restaurants?city=${val}`;
  // Returns a function so that it doesn't have to be a pure function allowing asynconisity
  return (dispatch) => {
    // Sets loading screen until pass or failure is determined
    dispatch(fetchRestaurantsRequest());
    // Runs data call
    return axios.get(url)
      .then(response => {
        dispatch(fetchRestaurantsSuccess(response.data))
        })
      .catch(error =>  fetchRestaurantsFailure(error.message));
  }
}


/***********  Restaurant filter actions  ***************/

export const filterRestaurantsRequest = (restaurantFilter) => {
  return {
    type: actionTypes.FILTER_RESTAURANT,
    payload: restaurantFilter
  }
}