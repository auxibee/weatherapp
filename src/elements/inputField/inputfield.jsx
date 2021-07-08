import React from 'react';
import styles from './inputfield.module.css'


const InputField = () => {
    return ( 
        <div className={styles.InputFieldWrapper}>
            <label htmlFor="location"> location </label>
            <input type="text" />
        </div>
     );
}
 
export default InputField;