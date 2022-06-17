import React from 'react';
import Header from './Header';
import styles from './styles/Products.module.css'
import BilBoard from './BilBoard';
import RIghtSection from './RIghtSection';

import ContextProvider from './ContextProvider';

const Products = () => {



    return (
        
        
        <div>

            <Header/>
        <div className={styles.products}>

 
        <div className={styles.container}>

            <RIghtSection />
            
            <div className={styles.leftDiv}>
            <BilBoard/>
            <div className={styles.hRow}></div>
            <div className={styles.padding145}></div>
            </div>
        
        </div>
            

        </div>
    </div>
    );
};

export default Products;