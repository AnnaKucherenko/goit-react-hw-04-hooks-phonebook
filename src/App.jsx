import { useState, useEffect } from "react";
import FormAddContact from './components/form/FormAddContact';
import ContactList from 'components/contactList/ContactList';
import Filter from './components/filter/Filter';
import { nanoid } from 'nanoid';

  
export default function  App () {
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(localStorage.getItem('contacts'))??[];
  });
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }
    const contactsArrey = contacts;
    const isFindContact = contactsArrey.find(contact=>contact.name===name);
    if (isFindContact) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts([...contacts,contact]);
      
    }
  }

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  useEffect(() => {
    console.log('обновилось поле контактов');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
    
  const normalizedFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
  );
    
  return (
      <div>
        <h1>Phonebook</h1>
        <FormAddContact onSubmit={addContact}/>
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter}/>
        {contacts.length > 0 && <ContactList
          contacts={visibleContact}
          onDeleteContact={deleteContact}
        />}
      </div>
  ); 
  
};

