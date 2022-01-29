import React from 'react';
import styles from './temparature.module.css'

const Temparature = ({degrees}) => {
    return ( 
        <div className={styles.TemparatureWrapper}>
            {Math.round(degrees)}<span className={styles.TemperatureSymbol}>°</span>
        </div>
     );
}
 
export default Temparature;