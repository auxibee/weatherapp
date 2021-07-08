import React from 'react';
import styles from './inputfield.module.css'


const InputField = ({label, name, id}) => {
    return ( 
        <div className={styles.InputFieldWrapper}>
            <label htmlFor={id}> {label} </label>
            <input type="text" name={name} id={id}/>
        </div>
     );
}
 
export default InputField;