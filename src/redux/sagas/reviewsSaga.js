import { takeEvery, put } from 'redux-saga/effects';

import { setReviews } from '../slices/reviewsSlice.js';
import reviews from '../data/reviews.js';

function* fetchReviews() {
    // const reviews = yield fetch('/api/reviews').then(res => res.json());
    yield put(setReviews(reviews));
}

export function* reviewsSaga() {
    yield takeEvery('reviews/fetchReviews', fetchReviews);
}
