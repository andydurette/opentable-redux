import React from 'react';
import { useDispatch} from 'react-redux';
import { fetchRestaurants } from '../actions/restaurants_actions';

function RestaurantsForm () {;
  const dispatch = useDispatch();

  let restaurantSearch = (e) =>{
    e.preventDefault();
    let city = e.target.city.value;
    if(city !== ''){
      dispatch(fetchRestaurants(city));;
    }
  }

  return (
      <form id='restaurantSearchForm' data-test="restaurant-search-form" onSubmit={(e) => restaurantSearch(e)}>
        <label  for="city" className="visuallyhidden">Search: </label>
        <input  type="text" name="city" id="city"  name="city" placeholder="Enter city" data-test="restaurant-search-form-input" />
        <button type="submit" data-test="restaurant-search-form-button">Search</button>
      </form>
        )
}

export default RestaurantsForm