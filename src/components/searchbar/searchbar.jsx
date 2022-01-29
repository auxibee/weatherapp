import React from 'react';
import InputField from '../../elements/inputField/inputfield' 
import Button from '../../elements/button/button'
import styles from './searchbar.module.css'

const SearchBar = ({onChange, onSetCity, value}) => {
    return ( 
        <div className={styles.SearchBarWrapper}>
            <InputField value={value} placeholder="enter your city" label="location" name="city" id="location" onChange={onChange}/>
            <Button type="button" onClickHandler={onSetCity} >set</Button>
        </div>
     );
}
 
export default SearchBar;