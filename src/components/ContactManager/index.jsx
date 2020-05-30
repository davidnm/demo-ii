import React, { useState } from "react";
import "./ContactManager.css";
import Modal from "../Modal";
import Form from "../Form"

const ContactManager = ({onSubmit}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onClick = () => setIsExpanded(!isExpanded);

  return (
    <>
      <div className="contact-manager-add" onClick={onClick}>
        +
      </div>
      <Modal onClick={onClick} isActive={isExpanded}>
      <Form onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default ContactManager;
