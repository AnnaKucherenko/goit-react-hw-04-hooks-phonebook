import { useState } from "react";
import styles from './FormAddContact.module.css'

export default function FormAddContact ({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        if(name==='name'){
           setName(value);  
        }
        if(name==='number'){
           setNumber(value); 
        }
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(name, number);
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
            <form  onSubmit={handleSubmit}>
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
                            value={name}
                            onChange={handleChange}
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
                            value={number}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                <button type='submit' className={styles.buttontForm}>Add contact</button>
            </div>
           
            </form>
    );
    
}

