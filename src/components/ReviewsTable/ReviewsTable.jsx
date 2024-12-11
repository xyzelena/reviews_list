import React from 'react';
import Table from 'react-bootstrap/Table';

const ReviewsTable = ({ reviews }) => {
    return (
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
                {reviews.map(review => (
                    <tr key={review.id}>
                        <td>{review.platform}</td>
                        <td>{review.rating}</td>
                        <td>{new Date(review.date).toLocaleString()}</td>
                        <td>{review.text}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ReviewsTable; 
