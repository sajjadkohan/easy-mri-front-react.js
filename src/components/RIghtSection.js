import React,{useState,useEffect} from 'react';
import styles from './styles/Products.module.css'
import InfoCard from './InfoCard';
import Filter from './Filter';
import axios from 'axios';


const RIghtSection = () => {

    const [show , setShow] = useState(true);

  
    const showHandler = ()=> {
            setShow(!show);
            console.log(window.screen.availWidth);
    };

    return (
            <div className={show?styles.rightDiv:styles.widthZero}>
                <div className={show?styles.menuBtnTrue:styles.menuBtn } onClick={showHandler} >
                <div className={show?styles.line1:styles.line}></div>
                <div className={show?styles.line2:styles.line}></div>
                <div className={show?styles.dNone:styles.line}></div>
            </div>
        <div className={show?styles.class:styles.dNone} >
            <InfoCard />
            <div className={styles.hRow}></div>
            <Filter/>
            <div className={styles.hRow}></div>
            <div className={styles.padding145}></div>
        </div>
            </div>
    );
};

export default RIghtSection;