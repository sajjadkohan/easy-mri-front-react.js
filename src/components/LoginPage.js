import React from 'react';
import styles from './styles/LoginPage.module.css'
import LoginCard from './LoginCard';
import "./styles/publicStyle.css"
import HeaderDefault from './HeaderDefault';

const LoginPage = () => {
    return (
        <div>
            <HeaderDefault/>
        <div className='anim'>
            <div className={styles.bodyLogin}>
                <LoginCard/>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;