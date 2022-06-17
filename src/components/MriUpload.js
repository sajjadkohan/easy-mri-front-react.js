import React,{useState,useRef,useEffect} from 'react';
import styles from "./styles/Upload.module.css"

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MriUpload = () => {

    useEffect(()=> {
        
    })

    const input = useRef(null);

    const [counter,setCounter] = useState(3);

    return (
        <div className={styles.upload}>
            <div className={styles.UploadContainer}>
            <div className={styles.uploadStyle}>
            <input onClick={(e)=> {console.log(e.target.files[0])}} className={styles.opacityNone} type="file"/>
            MRI  فایل <FontAwesomeIcon className={styles.uploadIcon} icon="upload" />
                </div>
                <div className={styles.navDiv}>
                <div className={styles.nav}></div>
                <span className={styles.counter}>{counter}%</span>
                </div>
            </div>
        </div>
    );
};

export default MriUpload;