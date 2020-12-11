/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';
import useField from '../hooks/useField';

const SignUpForm = () => {
  const username = useField('username');
  const password = useField('password');
  const passwordConfirm = useField('passwordConfirm');
  const history = useHistory();

  const [signIn] = useSignIn();
  const [signUp, result] = useSignUp();

  const submit = async (event) => {
    event.preventDefault();
    try {
      await signUp({ username: username.value, password: password.value });
      if (result) await signIn({ username: username.value, password: password.value });
      history.push('/');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <div>
      <h2>注册</h2>
      <p>登录账号后可查看信件发送状态，评论和点赞公开信件，后续相关服务正在推出中……</p>
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
          <div>
            <Form.Label>密码确认:</Form.Label>
            <Form.Control {...passwordConfirm} />
          </div>
          <Button variant="primary" id="login-button" type="submit">注册</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUpForm;
