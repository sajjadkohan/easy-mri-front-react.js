import React from 'react';
import styles from './styles/BilBoard.module.css';
import MriCard from './MriCard';
import MriReport from './MriReport';


const BilBoard = () => {
    return (
        <div>
            <div className={styles.bilBoard}>
            <MriCard/>
            <MriReport/>

            </div>
        </div>
    );
};

export default BilBoard;