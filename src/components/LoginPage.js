import React from 'react';
import styles from './styles/LoginPage.module.css'
import LoginCard from './LoginCard';
import "./styles/publicStyle.css"

const LoginPage = () => {
    return (
        <div className='anim'>
            <div className={styles.bodyLogin}>
                <LoginCard/>
            </div>
        </div>
    );
};

export default LoginPage;