import React, { useEffect } from 'react';
import styles from './styles/LoginPage.module.css'
import LoginCard from './LoginCard';
import "./styles/publicStyle.css"
import HeaderDefault from './HeaderDefault';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// toaster
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {

    const isLogin = useSelector(state => state?.userInfo?.userInfo?.success);
    const navigate = useNavigate();

    useEffect(async()=>{
        console.log(isLogin);
        if(isLogin){

            toast.success("...فقط چند ثانیه صبر کنید")

            setTimeout(() => {
                navigate("/userinfo");
            }, 2500);
        }
    })

    return (
        <div>
            <HeaderDefault/>
            <Toaster/>
        <div className='anim'>
            <div className={styles.bodyLogin}>
                <LoginCard />
            </div>
        </div>
        </div>
    );
};

export default LoginPage;