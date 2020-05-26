import React from 'react';
import 'normalize.css';
import '../styles/App.scss';
import RestaurantsForm from './RestaurantsForm';
import RestaurantsContainer from './RestaurantsContainer';

function App () {
  return (
      <div className='App' data-test="component-app">
        <div className='logo'><img src="./assets/images/OpenTable_logo2.png" alt="Open Table Logo"/></div>
        <h1>Lookup Restaurants by city</h1>
        <RestaurantsForm />
        <RestaurantsContainer />
      </div>
  )
}

export default App