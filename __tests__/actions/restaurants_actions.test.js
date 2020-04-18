import axios from 'axios';

import {fetchRestaurants} from '../../src/redux/actions/restaurants_actions';
 
import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE
} from '../../src/redux/actions/restaurantsTypes';



export function fetchRestaurants(val){
  var url = `http://opentable.herokuapp.com/api/restaurants?city=${val}`;
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


//

describe("Calls data for restaurants", () => {
  it("handles making the data call", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await fetchRestaurants("toronto")(dispatch, getState);
    expect(dispatch).toBeCalledWith({type: "FETCH_RESTAURANTS_REQUEST"});
  });
});

//


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