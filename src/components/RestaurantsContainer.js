import React from 'react';
import {useSelector} from 'react-redux';
import RestaurantsFilterForm from './RestaurantsFilterForm';


function RestaurantsContainer () {
const restaurantsData = useSelector(state => state.restaurants);
const restaurantName = useSelector(state => state.restaurantsFilter.restaurantName);

  if ( restaurantsData.loading ) {
    return (
      <div id="restaurantBox" data-test="restaurant-box">
        <div id="restaurantFilterOutterWrapper">
          <div id="restaurantFilterInnerWrapper">
          <p>Filter Results</p>
          <RestaurantsFilterForm />
          </div>
        </div>
        <p>Loading</p>
      </div>
    )
  }else if ( restaurantsData.error !== "" ) {
    return (
      <div id="restaurantBox" data-test="restaurant-box">
        <div id="restaurantFilterOutterWrapper">
          <div id="restaurantFilterInnerWrapper">
          <p>Filter Results</p>
          <RestaurantsFilterForm />
          </div>
        </div>
        {/*<p>{restaurantsData.error}</p>*/}
        <p>Service encountered an error try again later</p>
      </div>
    )
  }else {
    return (
      <div id="restaurantBox" data-test="restaurant-box">
      <React.Fragment>
      <div id="restaurantFilterOutterWrapper">
          <div id="restaurantFilterInnerWrapper">
          <p>Filter Results</p>
          <RestaurantsFilterForm  />
          </div>
        </div>
        <section id="restaurantContainer" data-test="restaurant-container">
          
          {restaurantsData && restaurantsData.restaurants.restaurants !== undefined &&
        
        restaurantsData.restaurants.restaurants.filter((restaurant) => {
          let rName = restaurantName.toLowerCase();
          return restaurant.name.toLowerCase().includes(rName)
        }).map((restaurants) => (
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
}

export default RestaurantsContainer