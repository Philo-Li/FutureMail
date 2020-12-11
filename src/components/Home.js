import React from 'react';
import CreateLetterForm from './CreateLetterForm';
import SlidesShow from './SlidesShow';

// eslint-disable-next-line arrow-body-style
const Home = () => {
  return (
    <div>
      <SlidesShow />
      <h3>写给未来的自己</h3>
      <CreateLetterForm />
    </div>
  );
};

export default Home;
