/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useSignIn from '../hooks/useSignIn';
import useField from '../hooks/useField';

const SignInForm = () => {
  const username = useField('username');
  const password = useField('password');

  const [signIn] = useSignIn();

  const submit = async (event) => {
    event.preventDefault();
    try {
      await signIn({ username: username.value, password: password.value });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <div>
      <h2>登录</h2>
      <Form id="signinform" onSubmit={submit}>
        <Form.Group>
          <div>
            <Form.Label>用户名或邮箱:</Form.Label>
            <Form.Control {...username} />
          </div>
          <div>
            <Form.Label>密码:</Form.Label>
            <Form.Control {...password} />
          </div>
          <Button variant="primary" id="login-button" type="submit">login</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignInForm;
