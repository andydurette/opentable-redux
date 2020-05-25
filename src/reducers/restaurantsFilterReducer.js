import {actionTypes} from '../actions/restaurants_actions'

const initialState = {
  restaurantName: '' ,
}

const restaurantsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_RESTAURANT:
      return {
        restaurantName: action.payload
      }
    default: return state
  }
}

export default restaurantsFilterReducer