import React, { useEffect, useState } from 'react';
import styles from './styles/InfoCard.module.css'
import userImg from './images/icons/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import { autoLogin, getUser, pushUserInfo } from '../redux/user/userAction';

const InfoCard = () => {

    const [tokenState,setTokenState] = useState();

   const user = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect( async ()=> {

      dispatch(autoLogin());

    //   console.log("||||",user.userInfo);

    },[])

    const userData = user.userInfo.userInfo;
    console.log(userData);

    // const {first_name , last_name , nationalCode , phoneNumber} = userData;

    return (
        <div>
            
        {
            userData?  

            <div className={styles.infoCard}>
        <div className={styles.top}>
            <div className={styles.textLeft}>
            <Button className={styles.btnExit}>خروج <FontAwesomeIcon icon="sign-out-alt" className={styles.exitImage}/></Button> </div>
            
            <img className={styles.userImage} src={userImg} alt="IMG" />
            <h4> {userData?.first_name} {userData?.last_name} : نام</h4>
        </div>
        <div className={styles.bottom}>
            <ul className={styles.ulInfo}>
                <li>
                    <h4>{userData?.nationalCode} : کد ملی</h4>

                </li>
                <li>
                    <h4>{userData?.phoneNumber}  : شماره موبایل</h4>

                </li>
                <li>
                    <h4>: نام پدر</h4>
                    <h4>نام پدر بیمار</h4>
                </li>
            </ul>
        </div>

        </div>

            :

        <div>loading . . .</div>  

            
            
        }
        
        
        </div>
    );
};

export default InfoCard;