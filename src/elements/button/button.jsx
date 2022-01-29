import React from 'react';
import styles from './button.module.css'

const Button = ({children, type, onClickHandler}) => {
    return ( 
        <button onClick={onClickHandler} className={styles.Button} type={type}>{children}</button>
     );
}
 
export default Button;