import React from 'react';
import styles from './logo.module.css'

const Logo = ({title}) => {
    return ( 
        <div className={styles.Logo}>
            <h1>{title}</h1>
        </div>
     );
}
 
export default Logo;