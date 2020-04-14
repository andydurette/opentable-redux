import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../redux'

function RestaurantsContainer ({ restaurantsData, fetchRestaurants }) {
  useEffect(() => {
    fetchRestaurants();
    // eslint-disable-next-line
  }, [])
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
          <div className="restaurantItem" key={restaurants.id} style={{backgroundImage: `url(${restaurants.image_url})`}}>
            <div className="info">
              <h3>{restaurants.name}</h3> 
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
    fetchRestaurants: () => dispatch(fetchRestaurants())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer)
