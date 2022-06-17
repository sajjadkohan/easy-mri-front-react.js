import React from 'react';
import styles from "./styles/Header.module.css";
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
                <Button className={styles.btnLogin}  >
                    <Link to="/login">
                    <span>ورود</span>
                    <FontAwesomeIcon icon="user" />
                    </Link>
                </Button>
            </div>

        </div>
    );
};

export default HeaderDefault;