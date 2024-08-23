import {combineReducers} from 'redux';
import listEmployeeSlice from './ListEmployee/slice'

const combineAppReducers = combineReducers( {
   listEmployee: listEmployeeSlice,
})

export default combineAppReducers

