import React from 'react';
import styles from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact}) {
    
        return (
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name}:  {contact.number}<button
                            type="button"
                            onClick={() => onDeleteContact(contact.id)}
                        className={styles.buttonDelete}>
                            Delete</button>
                    </li>
                ))}
            </ul>
        );
    
}

export default ContactList;
