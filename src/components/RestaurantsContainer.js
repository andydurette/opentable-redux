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
    <div>
      <h2>Restaurants List</h2>
      <div>
      {restaurantsData &&
          restaurantsData.restaurants.restaurants &&
          restaurantsData.restaurants.restaurants.map(user => <p>{user.name}</p>)}
      {/* {restaurantsData &&
          restaurantsData.restaurants[0] &&
          restaurantsData.restaurants[0].map(restaurants => <p>{restaurants.name}</p>)} */}
      </div>
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
