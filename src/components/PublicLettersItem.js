import React from 'react';
import { Button, Card } from 'react-bootstrap';

const PublicLettersItem = ({ item }) => {
  // eslint-disable-next-line arrow-body-style
  const handleLike = async (letter) => {
    return letter;
  };

  return (
    <div>
      <Card>
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
