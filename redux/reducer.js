import ActionTypes from './actionTypes'
import initialState from './initialState'

export default (state = initialState, action) => {
  console.log('action in reducer', action, 'initial state', state)
  switch (action.type) {
    case ActionTypes.SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      }
    case ActionTypes.NEWS_RESULT:
      return {
        ...state,
        newsResult: action.payload,
      }
    case ActionTypes.SPINNER: {
      return {
        ...state,
        spinner: action.payload,
      }
    }
    default:
      return state
  }
}
