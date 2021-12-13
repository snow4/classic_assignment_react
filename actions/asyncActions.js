import * as syncActions from './syncActions'
import Store from '../redux/store'
import Axios from 'axios'
import { GOOGLE_API } from '../config.json'

export const SearchQuery = (req, res) => {
  console.log('request', req)
  Store.dispatch(syncActions.Spinner(true))
  Axios.get(
    `https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google&q=${req}&api_key=${GOOGLE_API}`,
  )
    .then((response) => {
      console.log(response.data)
      Store.dispatch(syncActions.Spinner(false))
      Store.dispatch(syncActions.searchQuery(response.data))
    })
    .catch((err) => {
      Store.dispatch(syncActions.Spinner(false))
      Store.dispatch(syncActions.Error(err))
      console.log(err)
    })
}

export const NewsQuery = (req, res) => {
  Store.dispatch(syncActions.Spinner(true))
  Axios.get(
    `https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google&q=latestnews&api_key=${GOOGLE_API}`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  )
    .then((response) => {
      Store.dispatch(syncActions.Spinner(false))
      Store.dispatch(syncActions.NewsQuery(response.data))
    })
    .catch((err) => {
      console.log(err)
      Store.dispatch(syncActions.Spinner(false))
      Store.dispatch(syncActions.Error(err))
    })
}
