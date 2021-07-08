import React from 'react';
import Button from '../../elements/button/button'
import styles from './errornotice.module.css'

const ErrorNotice = () => {
    return ( 
        <div className={styles.ErrorNoticeWrapper}>
            <h1 className={styles.NotFound404}>404</h1>
            <div className={styles.ErrorTextWrapper}>
                <h2 className={styles.NotFoundHeading}>Oops!</h2>
                <p className={styles.NotFoundDetails}>We can't find the city you are looking for.</p>
                <Button 
                    name="tryAgain" 
                    type="button" 
                    position="onErrorNotice"
                    >Try again</Button>
            </div>
        </div>
     );
}
 
export default ErrorNotice;