import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { createReducer } from '../reducers/CreateReducer';
import { deleteReducer } from '../reducers/DeleteReducer';
import { editReducer } from '../reducers/EditReducer';
import { viewReducer } from '../reducers/ViewReducer';


export const store = createStore(combineReducers({createReducer, deleteReducer, editReducer, viewReducer}),{}, applyMiddleware(logger()));