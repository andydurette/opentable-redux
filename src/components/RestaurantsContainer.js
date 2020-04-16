import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../reducers';

// component

function RestaurantsContainer ({ restaurantsData, fetchRestaurants }) {

  useEffect(() => {
    //fetchRestaurants('toronto');
    // eslint-disable-next-line
  }, []);

  return restaurantsData.loading ? (
    <h2>Loading</h2>
  ) : restaurantsData.error ? (
    <h2>{restaurantsData.error}</h2>
  ) : (
    <div id="restaurantBox">
      <h2>Restaurants List</h2>
      <section id="restaurantContainer">
        {restaurantsData &&
            restaurantsData.restaurants.restaurants &&
        restaurantsData.restaurants.restaurants.map((restaurants) => ( 
          <div className="restaurantItem" key={restaurants.id}>
            <div className="priceBox">
            {[...Array(restaurants.price)].map((e, i) => {
              return <img key={i} src="./assets/images/dollarSignActive.svg" alt=""/>
            })}
            </div>
            <img src={restaurants.image_url} alt=""/>
            <div className="info">
              <h3>{restaurants.name}</h3> 
              <p>Location: {restaurants.address}</p>
              <p>Phone: {restaurants.phone}</p>
              
              <button onClick={ () => window.open(`${restaurants.reserve_url}`,'_blank') }>Reserve</button>
            </div>
          </div>
           ))}
      </section>
    </div>
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
)(RestaurantsContainer)