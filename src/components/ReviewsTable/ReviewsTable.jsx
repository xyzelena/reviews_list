// src/components/ReviewsTable.js
import React from "react";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/paginationSlice";

const ReviewsTable = ({ reviews }) => {
    const dispatch = useDispatch();

    const { currentPage, reviewsPerPage } = useSelector((state) => state.pagination);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const paginatedReviews = reviews.slice(
        (currentPage - 1) * reviewsPerPage,
        currentPage * reviewsPerPage
    );

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Платформа</th>
                        <th>Рейтинг</th>
                        <th>Время добавления</th>
                        <th>Текст отзыва</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedReviews.map((review) => (
                        <tr key={review.id}>
                            <td>{review.platform}</td>
                            <td>{review.rating}</td>
                            <td>{new Date(review.date).toLocaleString()}</td>
                            <td>{review.text}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Pagination className="justify-content-center">
                {[...Array(totalPages).keys()].map((page) => (
                    <Pagination.Item
                        key={page + 1}
                        active={page + 1 === currentPage}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        {page + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </>
    );
};

export default ReviewsTable;
