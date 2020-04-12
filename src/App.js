import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import RestaurantsContainer from './components/RestaurantsContainer'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <RestaurantsContainer />
      </div>
    </Provider>
  )
}

export default App
