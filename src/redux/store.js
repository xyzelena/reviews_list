import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reviewsReducer from './slices/reviewsSlice';
import paginationReducer from "./slices/paginationSlice";

import { reviewsSaga } from './sagas/reviewsSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        pagination: paginationReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(reviewsSaga);

export default store;


