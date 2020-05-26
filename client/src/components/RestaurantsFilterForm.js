import React from 'react';
import { useDispatch} from 'react-redux';
import { filterRestaurantsRequest } from '../actions/restaurants_actions';

function RestaurantsForm () {;
  const dispatch = useDispatch();

  let preventSubmit = (e) => {
    e.preventDefault();
  }

  let restaurantFilter = (e) =>{
    e.preventDefault();
    let restaurantName = e.target.value;
    dispatch(filterRestaurantsRequest(restaurantName));
  }

  return (
    <React.Fragment>
      <p>Filter Results:</p>
      <div id="restaurantFilter" data-test="restaurant-filter"  onSumbit={(e) => preventSubmit(e)}>
        <form>
          <label for="filter" className="visuallyhidden">Filter Results:</label>
          <input id="filter" name="filter" data-test="restaurant-filter-input"  type="text" placeholder="Enter restaurant name" onChange={(e) => restaurantFilter(e)}/>
        </form>
      </div>
    </React.Fragment>
  )
}

export default RestaurantsForm