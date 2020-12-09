import React from 'react';
import PublicLettersItem from './PublicLettersItem';
import useLetters from '../hooks/useLetters';

const PublicLettersList = () => {
  const { letters } = useLetters();
  if (!letters) return null;

  const lettersNodes = letters.edges
    ? letters.edges.map((edge) => edge.node)
    : [];

  console.log('lettersNode', lettersNodes);

  return (
    <div>
      <h2>公开信件</h2>
      {lettersNodes.map((letter) => (
        <div key={letter.id}>
          <PublicLettersItem item={letter} />
        </div>
      ))}
    </div>
  );
};

export default PublicLettersList;
