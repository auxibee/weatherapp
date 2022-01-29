import React from 'react';
import styles from './inputfield.module.css'


const InputField = ({placeholder,label, name, id, onChange, value}) => {
    return ( 
        <div className={styles.InputFieldWrapper}>
            <label htmlFor={id}> {label} </label>
            <input value={value} type="text" placeholder={placeholder} name={name} id={id} onChange={onChange} />
        </div>
     );
}
 
export default InputField;