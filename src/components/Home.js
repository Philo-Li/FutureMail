import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CreateLetterModal from './CreateLetterModal';
import SlidesShow from './SlidesShow';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

// eslint-disable-next-line arrow-body-style
const Home = () => {
  const { authorizedUser } = useAuthorizedUser();
  const history = useHistory();

  return (
    <div>
      <SlidesShow />
      {authorizedUser && <CreateLetterModal />}
      {!authorizedUser && (
        <div>
          <p>注册账号并开始写信</p>
          <Button variant="primary" onClick={() => history.push('/signup')}>
            注册
          </Button>
          <p>已经有账号？选择登录</p>
          <Button variant="secondary" onClick={() => history.push('/signin')}>
            登录
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
