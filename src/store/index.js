import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import allData from '../reducers/'


const rootReducer = combineReducers({
  allData
})

export default createStore( rootReducer, applyMiddleware( logger,thunkMiddleware ))