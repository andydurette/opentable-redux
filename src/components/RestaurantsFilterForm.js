import React from 'react';
import { useDispatch} from 'react-redux';
import { filterRestaurantsRequest } from '../actions/restaurants_actions';

function RestaurantsForm () {;
  const dispatch = useDispatch();

  let restaurantFilter = (e) =>{
    e.preventDefault();
    let restaurantName = e.target.value;
    dispatch(filterRestaurantsRequest(restaurantName));
  }

  return (
    <div id="restaurantFilter">
      <input name="restaurantFilter" type="text" placeholder="Enter restaurant name" onChange={(e) => restaurantFilter(e)}/>
    </div>
  )
}

export default RestaurantsForm