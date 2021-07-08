import React from 'react';
import InputField from '../../elements/inputField/inputfield' 
import Button from '../../elements/button/button'
import styles from './searchbar.module.css'

const SearchBar = () => {
    return ( 
        <div className={styles.InputFieldWrapper}>
            <InputField label="location" name="city" id="location"/>
            <Button type="button" >set</Button>
        </div>
     );
}
 
export default SearchBar;