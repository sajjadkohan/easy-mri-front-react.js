import React,{useState} from 'react';
import styles from './styles/LoginPage.module.css'
import "./styles/publicStyle.css"
import imagephome from './images/icons/smartphone(1).png';
import imagelock from './images/icons/padlock(1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

// toaster
import toast, { Toaster } from 'react-hot-toast';


// REDUX
import { useDispatch , useSelector } from 'react-redux';
import { loginer, pushUserInfo } from '../redux/user/userAction';

const LoginCard = () => {

    const [userInfoState,setUserInfoState] = useState("sdddddddd");

    const dispatch = useDispatch();
    const user = useSelector(state => state.userInfo)

    const navigate = useNavigate();


    const [loginState,setLoginState] = useState({
        nationalCode : "1234567890",
        password : "123456"
    });


    const login = async () => {
        
         await axios.post("http://localhost:5000/user/login",loginState)
         .then(async response => {
             const userInfo = response.data
             const success = response.data.success;

             
            (function (){
                dispatch(pushUserInfo(userInfo));
                })();

            localStorage.setItem("token",userInfo.user.token)
            localStorage.setItem("refreshToken",userInfo.RefreshToken)

            let fullName = userInfo.user.first_name + " " + userInfo.user.last_name
            
            toast.success(`خوش امدید ${fullName} : کاربر `)

                // success && navigate("/userinfo");

         })
         .catch(err => {

            // const errMsg = err.response.data?.errors.message;
            // const errNtCode = err.response.data?.errors.nationalCode;

            console.log(err.response.data);
            // toast.error(errMsg);
            // toast.error(errNtCode);

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
        <div className="loginCard">

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