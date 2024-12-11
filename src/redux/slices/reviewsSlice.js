import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
    name: 'reviews',

    initialState: {
        data: [],
        filters: {
            platform: '',
            ratingRange: [0, 5],
            searchText: "",
        },
        sortBy: {
            field: 'date',
            order: 'desc'
        },
    },
    reducers: {
        setReviews(state, action) {
            state.data = action.payload;
        },
        setFilters(state, action) {
            state.filters = { ...state.filters, ...action.payload };
        },
        setSortBy(state, action) {
            state.sortBy = action.payload;
        },
    },
});

export const { setReviews, setFilters, setSortBy } = reviewsSlice.actions;

export default reviewsSlice.reducer;
