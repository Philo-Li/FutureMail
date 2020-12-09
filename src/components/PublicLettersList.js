/* eslint-disable arrow-body-style */
import React from 'react';
import useLetters from '../hooks/useLetters';

const PublicLettersList = () => {
  const { letters } = useLetters();
  console.log('letters', letters);
  const lettersNodes = letters.edges
    ? letters.edges.map((edge) => edge.node)
    : [];
  console.log('lettersNode', lettersNodes);
  return (
    <div>
      <h2>公开信件</h2>
      {lettersNodes.map((letter) => {
        return (
          <div>
            {letter.title}
          </div>
        );
      })}
    </div>
  );
};

export default PublicLettersList;
