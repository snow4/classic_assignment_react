import actionTypes from '../redux/actionTypes'

export const searchQuery = (data) => ({
  type: actionTypes.SEARCH_RESULT,
  payload: data,
})

export const Spinner = (data) => ({
  type: actionTypes.SPINNER,
  payload: data,
})

export const NewsQuery = (data) => ({
  type: actionTypes.NEWS_RESULT,
  payload: data,
})

export const Error = (data) => ({
  type: actionTypes.ERROR,
  payload: data,
})
