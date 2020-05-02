import React from 'react';
import {useSelector} from 'react-redux';

function RestaurantsContainer () {
const restaurantsData = useSelector(state => state.restaurants);

  return restaurantsData.loading ? (
    <h2>Loading</h2>
  ) : restaurantsData.error ? (
    <h2>{restaurantsData.error}</h2>
  ) : (
    <div id="restaurantBox">
      <React.Fragment>
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
              <p>Address: {restaurants.address}</p>
              <p>Phone: {restaurants.phone}</p>
              
              <button onClick={ () => window.open(`${restaurants.reserve_url}`,'_blank') }>Reserve</button>
            </div>
          </div>
           ))}
           
      </section>
      </React.Fragment>
    </div>
  )
}

export default RestaurantsContainer