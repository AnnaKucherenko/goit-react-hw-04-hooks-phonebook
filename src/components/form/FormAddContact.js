import React, { Component } from 'react';
import styles from './FormAddContact.module.css'

class FormAddContact extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <div className={styles.formContact} >
                    <div className={styles.inputForm}>
                        <label  htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputForm}>
                        <label  htmlFor="number">
                            Number
                        </label>
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.number}
                            onChange={this.handleChange}
                            className={styles.input}
                        />
                    </div>
                <button type='submit' className={styles.buttontForm}>Add contact</button>
            </div>
           
            </form>
        );
    }
}

export default FormAddContact;