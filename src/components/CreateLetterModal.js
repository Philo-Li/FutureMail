/* eslint-disable no-alert */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateLetterForm from './CreateLetterForm';

const CreateLetterModal = () => {
  const [show, setShow] = useState(false);

  const handleHide = () => {
    if (window.confirm('信息将不会保存，确定离开吗？')) {
      setShow(false);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        开始写信
      </Button>

      <Modal
        show={show}
        size="lg"
        onHide={handleHide}
        backdrop="static"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            写给未来的自己
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateLetterForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateLetterModal;
