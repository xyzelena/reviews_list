import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { setFilters, setSortBy } from './redux/slices/reviewsSlice.js';

import filterAndSortReviews from './utils/filterAndSortReviews.js';

import Header from './components/Header/Header.jsx';
import ReviewsTable from './components/ReviewsTable/ReviewsTable.jsx';
import Filters from './components/Filters//Filters.jsx';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const { data, filters, sortBy } = useSelector(state => state.reviews);

  useEffect(() => {
    dispatch({ type: 'reviews/fetchReviews' });
  }, [dispatch]);

  const handleFilterChange = (values) => {
    dispatch(setFilters(values));
  }

  const handleSortChange = (values) => {
    dispatch(setSortBy(values));
  }

  const filteredReviews = filterAndSortReviews(data, filters, sortBy);

  return (
    <div className='app_container'>
      <Header />

      <Container>
        <Row>
          <Col sm={4}>
            <Filters
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
            />
          </Col>

          <Col sm={8}>
            <ReviewsTable reviews={filteredReviews} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

