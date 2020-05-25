import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import restaurantsFilterReducer from './restaurantsFilterReducer';

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  restaurantsFilter: restaurantsFilterReducer
})

export default rootReducer
