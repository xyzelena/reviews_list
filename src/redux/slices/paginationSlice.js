import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    reviewsPerPage: 5,
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setReviewsPerPage: (state, action) => {
            state.reviewsPerPage = action.payload;
        },
    },
});

export const { setCurrentPage, setReviewsPerPage } = paginationSlice.actions;

export default paginationSlice.reducer;
