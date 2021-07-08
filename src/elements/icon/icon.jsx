import React from 'react';
import styles from './icon.module.css'

const Icon = ({type}) => {
    return ( 
      
        <img className={styles.Icon} src={require(`../../assets/images/${type}.svg`).default} alt={type} />
     
     )
}
 
export default Icon