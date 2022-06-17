import React, { useEffect } from 'react';
import styles from './styles/InfoCard.module.css'
import userImg from './images/icons/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { useDispatch , useSelector } from 'react-redux';

const InfoCard = () => {


    const user = useSelector(state => state.userInfo)
    const dispatch = useDispatch();


    useEffect(async()=> {
         
//  console.log(user.userInfo.RefreshToken);

    localStorage.setItem("token" , user.userInfo.user.token )
    localStorage.setItem("refreshToken" , user.userInfo.RefreshToken)

        // const ali = state?.user?.allUsers[0];

    },[])

    const {first_name , last_name , nationalCode , phoneNumber} = user.userInfo.user

    return (
        <div>
            
        <div className={styles.infoCard}>
        <div className={styles.top}>
            <div className={styles.textLeft}>
            <Button className={styles.btnExit}>خروج <FontAwesomeIcon icon="sign-out-alt" className={styles.exitImage}/></Button> </div>
            
            <img className={styles.userImage} src={userImg} alt="IMG" />
            <h4> {first_name} {last_name} : نام</h4>
        </div>
        <div className={styles.bottom}>
            <ul className={styles.ulInfo}>
                <li>
                    <h4>{nationalCode} : کد ملی</h4>
                    {/* <h4>{ali.nationalCode}</h4> */}
                </li>
                <li>
                    <h4>{phoneNumber} : شماره موبایل</h4>
                    {/* <h4>{ali.phoneNumber}</h4> */}
                </li>
                <li>
                    <h4>: نام پدر</h4>
                    <h4>نام پدر بیمار</h4>
                </li>
            </ul>
        </div>

        </div>
        
        
        </div>
    );
};

export default InfoCard;