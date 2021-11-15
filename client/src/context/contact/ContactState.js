import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Tammy Baker',
        email: 'tbaker@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Jimmy Dudd',
        email: 'jdud@gmail.com',
        phone: '222-332-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Ken Baker',
        email: 'kbaker@gmail.com',
        phone: '222-277-2222',
        type: 'professional',
      },
      {
        id: 4,
        name: 'Mike Hawk',
        email: 'mhawk@gmail.com',
        phone: '222-777-2222',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  const deleteContact = (id) => {
    console.log(id);
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
