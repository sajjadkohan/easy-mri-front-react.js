import React,{useState} from 'react';
import styles from './styles/LoginPage.module.css'
import imagephome from './images/icons/smartphone(1).png';
import imagelock from './images/icons/padlock(1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

// toaster
import toast, { Toaster } from 'react-hot-toast';


// REDUX
import { useDispatch } from 'react-redux';
import { pushUserInfo } from '../redux/user/userAction';

const LoginCard = () => {

    const [userInfoState,setUserInfoState] = useState();

    const dispath = useDispatch();

    const navigate = useNavigate();


    const [loginState,setLoginState] = useState({
        nationalCode : "",
        password : ""
    });


    const login = async () => {
        
         await axios.post("http://localhost:5000/user/login",loginState)
         .then( response => {
             const userInfo = response.data
             setUserInfoState(userInfo)
             console.log("State>>>>",userInfoState);
             const success = response.data.success;

            const userPushDipath = () => {
                dispath(pushUserInfo(userInfoState))
            };
            userPushDipath()

             setTimeout(() => {
                success && navigate("/userinfo");
             }, 1500);

         })
         .catch(err => {

            const errMsg = err.response.data.messages
            console.log(errMsg);
            toast.error(Object.entries(errMsg))
         })
     }

    const changeHandler = event => {
        setLoginState(
            {...loginState,[event.target.name] : event.target.value}
            )

        // console.log(loginState);
    }


    return (
        <div>
            <Toaster/>
        <div className={styles.loginCard}>

            <div className={styles.headerTopDiv}>صفحه ورود</div>
            <div className={styles.bodyDiv}>
                <div className={styles.kodeMeli}>
                    <div className={styles.kodeMeliChild}>
                    <input className={styles.inputLogin} name="nationalCode" value={loginState.nationalCode} onChange={changeHandler} />
                    <span className={styles.spanLogin}>کد ملی</span>
                    </div>
                    
                    <img className={styles.phoneImg} src={imagephome} alt="IMG" />
                </div>

                <div className={styles.ramzObur}>
                    <div className={styles.kodeMeliChild}>
                    <input className={styles.inputLogin} name="password" value={loginState.password} onChange={changeHandler}  />
                    <span className={styles.spanLogin}>رمز عبور</span>
                    </div>
                    <FontAwesomeIcon icon="lock" className={styles.falock}/>
                    {/* <img className={styles.phoneImg} src={imagelock} alt="IMG" /> */}
                </div>

                <button type="submit" onClick={login} className={styles.btnLogin} >ورود</button>

            </div>

            <div className={styles.forgetDiv}>
                <>رمز عبور را فراموش کرده اید؟</>
            </div>
        </div>
        <div style={{padding: "100px"}}></div>
        </div>
    );
};

export default LoginCard;