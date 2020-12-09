import React from 'react';
import useLetters from '../hooks/useLetters';

const PublicLettersList = () => {
  const { publicletters } = useLetters();
  return (
    <div>
      <h2>公开信件</h2>
    </div>
  );
};

export default PublicLettersList;
