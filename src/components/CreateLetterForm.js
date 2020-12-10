/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import useCreateLetter from '../hooks/useCreateLettter';
import useField from '../hooks/useField';

const CreateLetterForm = () => {
  const title = useField('title');
  const text = useField('text');
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
        <Form.Group>
          <div>
            <Form.Label>标题:</Form.Label>
            <Form.Control {...title} />
          </div>
          <div>
            <Form.Label>正文:</Form.Label>
            <Form.Control {...text} />
          </div>
          <Button variant="primary" id="create-button" type="submit">发送到未来</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreateLetterForm;
