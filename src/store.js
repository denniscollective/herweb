import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

export default function (initialState = {year: 2000}) {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
