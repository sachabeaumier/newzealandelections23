import { combineReducers, createStore } from 'redux'

// import stuff from './stuff'
import donationsReducer from './donations'

export default combineReducers({
  // stuff
  donations: donationsReducer,
})

// const rootReducer = combineReducers({
//   donations: donationsReducer,
//   // add other reducers here
// })

// const initialState = {
//   donations: null, // initialize the donations state with null
//   // add other initial states here
// }

// const store = createStore(rootReducer, initialState)

// export default store
