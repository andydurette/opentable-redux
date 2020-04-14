import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';
import './scss/App.scss';
import store from './redux/store';
import RestaurantsForm from './components/RestaurantsForm';
import RestaurantsContainer from './components/RestaurantsContainer';

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='logo'><img src="./assets/images/OpenTable_logo2.png" alt="Open Table Logo"/></div>
        <h1>Canada's Resturant Lookup by city</h1>
      
        <RestaurantsForm />
        <RestaurantsContainer />
      </div>
    </Provider>
  )
}

export default App