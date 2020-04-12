import { combineReducers } from 'redux'
import restaurantsReducer from './restaurants/restaurantsReducer'

const rootReducer = combineReducers({
  restaurants: restaurantsReducer
})

export default rootReducer
