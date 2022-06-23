import React from 'react';
import styles from "./styles/Header.module.css";
import './styles/publicStyle.css'
import { Link } from 'react-router-dom';
import hospitalImage from './images/icons/hospital.png'
import { ButtonBase , Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const HeaderDefault = () => {


    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <ul>
                    <li><Link to="/">صفحه نخست</Link></li>
                    <li><Link to="/register">ثبت نام</Link></li>
                    <li><Link to="/">بررسی اطلاعات</Link></li>
                    <li><Link to="/">درباره ما</Link></li>

                </ul>
            </div>
            <div className={styles.logoDiv}>
                <Link to="/">
                <img src={hospitalImage} />
                </Link>
            </div>
            <div className={styles.info}>

                    <Link to="/uploadfile">
            <Button className={styles.btnUpReport}  >
                    <span>آپلود فایل</span>
                    <FontAwesomeIcon icon='file' />
                </Button>
                    </Link>

                    <Link className='link' to="/login">
                <Button className={styles.btnUpFile}  >
                    <span>آپلود گزارش</span>
                    <FontAwesomeIcon icon='book-open' />
                </Button>
                    </Link>
            </div>

        </div>
    );
};

export default HeaderDefault;