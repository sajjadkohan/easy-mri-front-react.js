import React, { useState , useEffect } from 'react';
import styles from "./styles/Header.module.css";
import { Link } from 'react-router-dom';
import hospitalImage from './images/icons/hospital.png'
import { ButtonBase , Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pushUserInfo, testAction } from '../redux/user/userAction';
import { useSelector , useDispatch } from 'react-redux';


const Header = () => {


    // const state = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const [myName,setMyName] = useState("SAJJAD KOHAN");

    useEffect(() => {
        
        
        // (function(){
        //     dispatch(pushUserInfo(state.userInfo.user.first_name))
        //     })();
    }, [])
    
    // const {first_name , last_name} = state.userInfo.user


// console.log(state);

    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <ul>
                    <li><Link to="/">صفحه نخست</Link></li>
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
                    {/* <span>{first_name} {last_name}</span> */}
                    <FontAwesomeIcon icon="user" />
                    </Link>
                </Button>
            </div>

        </div>
    );
};

export default Header;