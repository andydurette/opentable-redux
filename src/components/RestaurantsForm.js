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
      <form id='restaurantSearchForm' onSubmit={(e) => restaurantSearch(e)}>
        <input id="city" type="text" name="city" placeholder="Enter city" />
        <button type="submit" value="Submit">Search</button>
      </form>
        )
}

export default RestaurantsForm