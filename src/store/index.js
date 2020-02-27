import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import data from '../reducers/'


const rootReducer = combineReducers({
  data
})

export default createStore( rootReducer, applyMiddleware( logger,thunkMiddleware ))