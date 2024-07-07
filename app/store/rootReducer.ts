import {combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {reducer as userReducer } from './users/user.slice'

export const reducers = {
	user: userReducer,
	toastr: toastrReducer,
}

const reducer = combineReducers(reducers)
