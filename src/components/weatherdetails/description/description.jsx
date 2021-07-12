import React from 'react';
import styles from './description.module.css'

const Description = ({type}) => {
    return ( 
        <div className={styles.DescriptionWrapper}>
            {type}
        </div>
     );
}
 
export default Description;