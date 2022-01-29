import React from 'react';
import Logo from '../../elements/logo/logo'
import styles from './header.module.css'


const Header = ({color="default"}) => {
   
    return ( 
        <div className={styles.Header} style={{backgroundColor : color}}>
            <Logo title="my weather" />
        </div>
     );
}
 
export default Header;