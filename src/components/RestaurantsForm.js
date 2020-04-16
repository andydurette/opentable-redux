import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../reducers';

function RestaurantsForm ({ restaurantsData, fetchRestaurants }) {

  let teamMake = (e) =>{
    e.preventDefault();
    let city = e.target.city.value;
    fetchRestaurants(city);
  }

  return (
      <form id='form' onSubmit={(e) => teamMake(e)}>
        <input id="city" type="text" name="city" />
        <button type="submit" value="Submit">Search for Resturants</button>
      </form>
        )
}

const mapStateToProps = state => {
  return {
    restaurantsData: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: (val) => dispatch(fetchRestaurants(val))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsForm)