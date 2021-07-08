import React from 'react';
import Logo from '../../elements/logo/logo'
import styles from './header.module.css'


const Header = () => {
    return ( 
        <div className={styles.Header}>
            <Logo title="my weather" />
        </div>
     );
}
 
export default Header;