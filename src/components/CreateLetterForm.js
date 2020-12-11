/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import useCreateLetter from '../hooks/useCreateLetter';
import useField from '../hooks/useField';
import useLetterTitleField from '../hooks/useLetterTitleField';
import useLetterTextField from '../hooks/useLetterTextField';

const CreateLetterForm = () => {
  const title = useLetterTitleField('title');
  const text = useLetterTextField('text');
  const sendTime = useField('sendTime');
  const history = useHistory();

  const [createLetter] = useCreateLetter();

  const variables = {
    title: title.value,
    text: text.value,
    sendTime: sendTime.value,
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      await createLetter(variables);
      history.push('/');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <div>
      <Form id="createLetterform" onSubmit={submit}>
        <Form.Group controlId="letterTitle">
          <Form.Label>标题</Form.Label>
          <Form.Control {...title} type="title" />
        </Form.Group>
        <Form.Group controlId="letterText">
          <Form.Label>正文</Form.Label>
          <Form.Control as="textarea" rows={10} {...text} type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>发送到：</Form.Label>
          <Form.Control type="sendTime" placeholder="发送时间" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="收件人邮箱: 如 name@example.com" />
          <Form.Control type="author" placeholder="发件人昵称" />
          <Form.Text className="text-muted">
            这部分内容将不会被公开，我们也不会将其分享给任何人。
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="匿名公开" />
          </Form.Group>
          <Button variant="primary" id="create-button" type="submit">发送到未来</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreateLetterForm;
