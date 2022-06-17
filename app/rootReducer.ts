import { combineReducers } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';

const rootReducer = combineReducers({
    filter: filterSlice
});

export default rootReducer;
