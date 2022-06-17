import React from 'react';
import Header from './Header';
import styles from './styles/Products.module.css'
import BilBoard from './BilBoard';
import RIghtSection from './RIghtSection';

import ContextProvider from './ContextProvider';

const Products = () => {



    return (
        
        
        <div>
        <div className={styles.products}>
        <ContextProvider>

 
        <div className={styles.container}>

            <RIghtSection />
            
            <div className={styles.leftDiv}>
            <BilBoard/>
            <div className={styles.hRow}></div>
            <BilBoard/>
            <div className={styles.padding145}></div>
            </div>
        
        </div>
            
        </ContextProvider>
        </div>
    </div>
    );
};

export default Products;