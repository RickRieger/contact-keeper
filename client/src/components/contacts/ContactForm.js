import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const initialContact = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  // const [contactState, contactDispatch] = useContacts();

  // const { current } = contactState;

  const [contact, setContact] = useState(initialContact);

  // useEffect(() => {
  //   if (current !== null) {
  //     setContact(current);
  //   } else {
  //     setContact(initialContact);
  //   }
  // }, [current]);

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });

    // if (current === null) {
    //   addContact(contactDispatch, contact).then(() =>
    //     setContact(initialContact)
    //   );
    // } else {
    //   updateContact(contactDispatch, contact);
    // }
    // clearAll();
  };

  // const clearAll = () => {
  //   clearCurrent(contactDispatch);
  // };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {/* {current ? 'Edit Contact' : 'Add Contact'} */}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          // value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {/* {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )} */}
    </form>
  );
};

export default ContactForm;
