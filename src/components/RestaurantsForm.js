import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurants } from '../redux/reducers';

function RestaurantsForm () {
  const dispatch = useDispatch()

  let teamMake = (e) =>{
    e.preventDefault();
    let city = e.target.city.value;
    dispatch(fetchRestaurants(city));
    
  }

  return (
      <form id='form' onSubmit={(e) => teamMake(e)}>
        <input id="city" type="text" name="city" />
        <button type="submit" value="Submit">Search for Resturants</button>
      </form>
        )
}

export default RestaurantsForm