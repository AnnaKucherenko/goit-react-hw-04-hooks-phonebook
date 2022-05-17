import React from 'react';
import styles from './Filter.module.css';

function Filter({ value, onChange }) {
    return (
        <label className={styles.filterInput}>
            Find contacts by name
            <input type="text" value={value} onChange={onChange} className={styles.input}></input>
        </label>
    )
    
}

export default Filter;