import React from 'react';
import Logo from '../../elements/logo/logo'
import styles from './footer.module.css'

const Footer = () => {
    return ( 
        <div className={styles.Footer}>
            <Logo title="my weather" />
        </div>
     );
}
 
export default Footer;