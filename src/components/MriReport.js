import React from 'react';
import styles from './styles/MriReport.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MriReport = () => {
    return (
        <div className={styles.mriReport}>
            <div className={styles.title}>

             <div className={styles.part1}>
                <FontAwesomeIcon icon="sticky-note" className={styles.stickynote} />
               
             </div>
             <div className={styles.part1}>
                <span>پارگی ناقص رباط صلیبی</span>
             </div>
             <div className={styles.part1}>
                <span className={styles.date}>11/9/1400</span>
             </div>
             

            </div>
            
            <div className={styles.subTitle}>
            
            <div className={styles.part1}>
                <span>MRI گزارش </span>
             </div>
             <div className={styles.part1}>
                <span>: موضوع گزارش </span>
             </div>
             <div className={styles.part1}>
                <span>: تاریخ صدور گزارش</span>
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

export default MriReport;