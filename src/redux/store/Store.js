import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

import { createReducer } from '../reducers/CreateReducer';
import { deleteReducer } from '../reducers/DeleteReducer';
import { editReducer } from '../reducers/EditReducer';
import { viewReducer } from '../reducers/ViewReducer';

const logger = createLogger({

});

export const store = createStore(combineReducers({ createReducer, deleteReducer, editReducer, viewReducer }),
    {},
    applyMiddleware(logger, thunk));