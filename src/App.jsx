import React, { Component } from 'react';
import FormAddContact from './components/form/FormAddContact';
import ContactList from 'components/contactList/ContactList';
import Filter from './components/filter/Filter';
import { nanoid } from 'nanoid';

  
class App extends Component {
  state = {
    contacts: [],
    filter:'',
  };

  addContact = state => {
    console.log(state.name)
    const contact = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    }
    const contactsArrey = this.state.contacts;
    const isFindContact = contactsArrey.find(contact=>contact.name===state.name);
    if (isFindContact) {
      alert(`${state.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact], 
      })); 
    }
    
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('обновилось поле контактов');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    
    return (
      <div>
        <h1>Phonebook</h1>
        <FormAddContact onSubmit={this.addContact}/>
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={ this.changeFilter}/>
        {contacts.length > 0 && <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />}
      </div>
    ); 
  }
};

export default  App;
