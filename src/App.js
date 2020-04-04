import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer></CakeContainer>
      </Provider>
    </div>
  );
}

export default App;