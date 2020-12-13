import React from 'react';
import { Form } from 'react-bootstrap';
import PublicLettersItem from './PublicLettersItem';
import useLetters from '../hooks/useLetters';

const PublicLettersList = () => {
  const { letters } = useLetters();
  if (!letters) return null;

  const lettersNodes = letters.edges
    ? letters.edges.map((edge) => edge.node)
    : [];

  const publicLetters = lettersNodes.filter((letter) => letter.setPrivate === false);

  return (
    <div>
      <h2>未来邮箱 && 匿名公开信件</h2>
      <Form>
        {publicLetters.map((letter) => (
          <div key={letter.id}>
            <Form.Group>
              <PublicLettersItem item={letter} />
            </Form.Group>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default PublicLettersList;
