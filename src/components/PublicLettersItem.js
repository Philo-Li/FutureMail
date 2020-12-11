/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useDate from '../hooks/useDate';

const PublicLettersItem = ({ item }) => {
  // eslint-disable-next-line arrow-body-style
  const handleLike = async (letter) => {
    return letter;
  };

  const { year, month, day } = useDate(item.createdAt);

  return (
    <div>
      <Card>
        <Card.Header>
          来自 {year} 年 {month} 月 {day} 日
        </Card.Header>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <div>
            {item.text}
          </div>
          <div>
            {item.likes ? item.likes : 0}
            <Button variant="info" id="like-button" onClick={() => handleLike(item)}>like</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PublicLettersItem;
