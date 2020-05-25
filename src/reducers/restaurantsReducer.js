import {actionTypes} from '../actions/restaurants_actions'

const initialState = {
  loading: false,
  restaurants: [],
  error: ''
}

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_RESTAURANTS_SUCCESS:
      return {
        loading: false,
        restaurants: action.payload,
        error: ''
      }
    case actionTypes.FETCH_RESTAURANTS_FAILURE:
      return {
        loading: false,
        restaurants: [],
        error: action.payload
      }
    default: return state
  }
}

export default restaurantsReducer