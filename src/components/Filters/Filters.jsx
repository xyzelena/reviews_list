import React from 'react';

import Form from 'react-bootstrap/Form';

import styles from './Filters.module.css';

const Filters = ({ onFilterChange, onSortChange }) => {
  return (
    <div className={styles.filters_container}>

      <div className={styles.filters_container_partFilter}>
        <h3>Фильтровать по:</h3>

        <div>
          <Form.Label>Рейтинг:</Form.Label>
          <Form.Range
            min="0"
            max="5"
            onChange={e => onFilterChange({ ratingRange: [+e.target.value, 5] })}
          />
        </div>

        <Form.Select onChange={e => onFilterChange({ platform: e.target.value })}>
          <option value="">Все платформы</option>
          <option value="Google">Google</option>
          <option value="Яндекс">Яндекс</option>
          <option value="2ГИС">2ГИС</option>
        </Form.Select>
      </div>

      <div className={styles.filters_container_partSort}>
        <h3>Сортировать по:</h3>

        <Form.Select onChange={e => onSortChange({ field: 'date', order: e.target.value })}>
          <option value="desc">Новые</option>
          <option value="asc">Старые</option>
        </Form.Select>

        <Form.Select onChange={e => onSortChange({ field: 'rating', order: e.target.value })}>
          <option value="desc">По убыванию рейтинга</option>
          <option value="asc">По возрастанию рейтинга</option>
        </Form.Select>

      </div>
    </div>
  );
};

export default Filters;

