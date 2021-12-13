import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import initState from './initialState'
import rootReducer from './reducer'

// function configureStore(initialState = initState) {
//   const middleware = [thunk];
//   if (typeof window !== "undefined") {
//     middleware.push(createLogger({ collapsed: true }));
//   }
//   return createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
//   );
// }

const middleware = [thunk]
middleware.push(createLogger({ collapsed: true }))
const enhancers = compose(
  applyMiddleware(...middleware),
  typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : (f) => f,
)
const store = createStore(
  rootReducer,
  initState,
  // composeWithDevTools(applyMiddleware(...middleware)),
  enhancers,
  // __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

// const store = createStore(rootReducer, initState)
export default store
