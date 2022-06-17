import React,{useState} from 'react';
import styles from "./styles/Upload.module.css"

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RepotrtUpload = () => {

    const [counter,setCounter] = useState(3);

    return (
        <div className={styles.upload}>
            <div className={styles.UploadReportContainer}>
                <div className={styles.uploadStyle}>
            <input className={styles.opacityNone} type="file"/>
            MRI گزارش <FontAwesomeIcon className={styles.uploadIcon} icon="upload" />
                </div>
                <div className={styles.navDiv}>
                <div className={styles.nav}></div>
                <span className={styles.counter}>{counter}%</span>
                </div>
            </div>
        </div>
    );
};

export default RepotrtUpload;