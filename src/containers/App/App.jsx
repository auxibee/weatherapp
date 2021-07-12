import React, { Component } from 'react';
import styles from './App.module.css'
import Card from './../../elements/card/card'
import Header from './../../components/header/header';
import SearchBar from './../../components/searchbar/searchbar';
import Footer from './../../components/footer/footer';
import Preview from './../../components/preview/preview';
import ErrorNotice from './../../components/errornotice/errornotice';


const App = () => {
    return ( 
        <div className={styles.AppWrapper}>
            <Header />
            <main className={styles.AppMain}>
                <SearchBar />
               <Card>
                   <Preview />
               </Card>

            </main>
           
           <footer>
              <Footer />
           </footer>
            
        </div>
     );
}
 
export default App;