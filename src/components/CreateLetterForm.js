/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import useCreateLetter from '../hooks/useCreateLetter';
import useDatePicker from '../hooks/useDatePicker';
import useField from '../hooks/useField';
import useLetterTitleField from '../hooks/useLetterTitleField';
import useLetterTextField from '../hooks/useLetterTextField';

const CreateLetterForm = () => {
  const [isPrivate, setIsPrivate] = useState('false');
  const title = useLetterTitleField('title');
  const text = useLetterTextField('text');
  const author = useField('author');
  const email = useField('email');
  const sendTime = useDatePicker('sendTime');
  const history = useHistory();

  const [createLetter] = useCreateLetter();

  const variables = {
    title: title.value,
    text: text.value,
    sendTime: sendTime.value,
    author: author.value,
    email: email.value,
    private: isPrivate,
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      // await createLetter(variables);
      // history.push('/');
      console.log('variables', variables);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const handleChange = async (e) => {
    const isChecked = e.target.checked;
    setIsPrivate(!isChecked);
  };

  return (
    <div>
      <Form id="createLetterform" onSubmit={submit}>
        <Form.Group controlId="letterTitle">
          <Form.Label>标题</Form.Label>
          <Form.Control {...title} />
        </Form.Group>
        <Form.Group controlId="letterText">
          <Form.Label>正文</Form.Label>
          <Form.Control as="textarea" rows={10} {...text} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>发送到：</Form.Label>
          <DatePicker {...sendTime} />
        </Form.Group>
        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="2">收件人邮箱: </Form.Label>
          <Col sm="10">
            <Form.Control {...email} placeholder="如 name@example.com" inline="true" />
          </Col>
          <Form.Label column sm="2">发件人昵称: </Form.Label>
          <Col sm="10">
            <Form.Control {...author} placeholder="发件人昵称" />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="匿名公开" onChange={(e) => handleChange(e)} />
            <Form.Text className="text-muted">
              邮箱和内容将不会被公开，我们也不会将其分享给任何人。
            </Form.Text>
          </Form.Group>
          <Button variant="primary" id="create-button" type="submit">发送到未来</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreateLetterForm;
