import React from 'react';
import styles from './preview.module.css'

const Preview = () => {
    return ( 
        <img className={styles.Preview} src={require(`../../assets/images/Preview.svg`).default} alt="preview" />
     );
}
 
export default Preview;