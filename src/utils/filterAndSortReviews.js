const filterAndSortReviews = (reviews, filters, sortBy) => {
    const filteredReviews = reviews
        .filter(review => {
            if (filters.platform && review.platform !== filters.platform) {
                return false;
            }

            if (review.rating < filters.ratingRange[0] || review.rating > filters.ratingRange[1]) {
                return false;
            }

            if (
                filters.searchText &&
                !review.text.toLowerCase().includes(filters.searchText.toLowerCase())
            ) {
                return false;
            }

            return true;
        });

    const results = filteredReviews
        .sort((a, b) => {
            if (sortBy.field === 'date') {
                return (sortBy.order === 'asc')
                    ? (new Date(a.date) - new Date(b.date))
                    : (new Date(b.date) - new Date(a.date));
            }

            if (sortBy.field === 'rating') {
                return (sortBy.order === 'asc')
                    ? (a.rating - b.rating)
                    : (b.rating - a.rating);
            }

            return 0;
        });

    return results;
};

export default filterAndSortReviews;
