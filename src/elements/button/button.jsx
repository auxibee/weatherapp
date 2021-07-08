import React from 'react';
import styles from './button.module.css'

const Button = ({children, type}) => {
    return ( 
        <button className={styles.Button} type={type}>{children}</button>
     );
}
 
export default Button;