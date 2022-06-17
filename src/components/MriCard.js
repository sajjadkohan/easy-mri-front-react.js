import React from 'react';
import styles from './styles/MriCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MriCard = () => {
    return (
            <div className={styles.mriCard}>
            <div className={styles.title}>

             <div className={styles.part1}>
                <span>ID</span>
             </div>
             <div className={styles.part1}>
                <span>First Name</span>
             </div>
             <div className={styles.part1}>
                <span>Last Name</span>
             </div>
             <div className={styles.part1}>
                <span>Age</span>
             </div>
             <div className={styles.part1}>
                <span>Study</span>
             </div>
             <div className={styles.part1}>
                <span>Date</span>
             </div>

            </div>
            
            <div className={styles.subTitle}>
            
            <div className={styles.part1}>
                <span>ID</span>
             </div>
             <div className={styles.part1}>
                <span>Alireza</span>
             </div>
             <div className={styles.part1}>
                <span>Delbari</span>
             </div>
             <div className={styles.part1}>
                <span>24 years</span>
             </div>
             <div className={styles.part1}>
                <span>KNEE/LT</span>
             </div>
             <div className={styles.part1}>
                <span>1400/8/13</span>
             </div>
            
            </div>
            <div className={styles.downLoad}>
                <div className={styles.downLoadDiv}>
                <FontAwesomeIcon icon="download" className={styles.fadownload}/>
                <span>
                   <Link to="/">DOWNLOAD</Link>
                </span>
                </div>
            </div>
            </div>
    );
};

export default MriCard;