import React from 'react';
import styles from './date.module.css'

const DateDisplay = () => {
    const today = new Date()
    return ( 
        <div className={styles.DateWrapper}>
            {today.toDateString()}
        </div>
     );
}
 
export default DateDisplay;