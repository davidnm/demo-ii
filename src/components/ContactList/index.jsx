import React from "react";
import "./ContactList.css";
import Contact from "../Contact";

const ContactList = ({ className, listOfContacts = [] }) => (
  <table className={`contact-list-base${className ? ` ${className}` : ``}`}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {listOfContacts.length 
      ? listOfContacts.map((contact) => (
        <Contact {...contact} />
      )) :  <tr>No contacts present here yet</tr> }
    </tbody>
  </table>
);

export default ContactList;
