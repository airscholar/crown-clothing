import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleWare } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = configureStore(rootReducer, applyMiddleWare(...middlewares));

export default store;
