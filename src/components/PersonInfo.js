import React,{useState,useEffect,useRef} from 'react';
import styles from './styles/RegisterPage.module.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
// toaster
import toast, { Toaster } from 'react-hot-toast';

//styles
import "./styles/errorsStyles.css";

// REDUX
import { useDispatch , useSelector } from 'react-redux';


const PersonInfo = () => {

    const navigate = useNavigate();

    const [personalInfo,setPersonalInfo] = useState({

        first_name : "",
        last_name : "",
        nationalCode : "",
        phoneNumber : "",
        password : "",
        confirm_password : ""
    })

    const [errors,setErrors] = useState({});

    // redux
    // const dispatch = useDispatch();
    // const state = useSelector(state => state.dataUserState)

    const maleDiv = useRef();
    const femaleDiv = useRef();

    // useEffect(()=> {
    //    console.log(femaleDiv.current.classList)
    // },[])

    let BASE_URL = 'http://localhost:5000/user/register';

    const register = async (e) => {
        e.preventDefault();
            // console.log("STATE",personalInfo)

                await axios.post(BASE_URL, personalInfo)
                .then(response => {
                    console.log(response.data);
                    const sucess = response.data.success;
                    sucess && toast.success("اطلاعات با موفقیت ثبت شد")
                    
                   setTimeout(() => {
                    sucess && navigate("/login",{replace : true});
                   }, 1500);
                })

                .catch( error => {
                    // console.log(error.response.data.messages);
                    setErrors(error.response.data.messages)
                    console.log(errors);
                    toast.error(Object.entries(error.response.data.messages))
                })
            
    }

    const getAllData = (e) => {
        e.preventDefault();
        axios.get(BASE_URL)
        .then(response => console.log(response.data))

    }


    // مقادیر اینپوت ها به این استیت پوش می شود و بعد از ان مقدیر 
    // این استیت به صورت پی لود به دیسپچ مورد نظر داده می شود



    const [gender , setGender] = useState(true)
    const [clicked , setClicked] = useState(0)


    // const chooseFemale = event => {
    //     setPersonalInfo({
    //         ...personalInfo,
    //         gender : "female"
    //     })
    //     console.log(personalInfo)

        
    //     event.target.classList.add(styles.radioDivActive)
        
    // }


    const chooseMale = event => {

        setClicked(clicked+1)

        function isOdd(num) { return num % 2;}

        femaleDiv.current.className = styles.radioDiv;
        maleDiv.current.className = styles.radioDiv;


        if (isOdd(clicked)) {
            femaleDiv.current.className = styles.radioDivActive;
        } else {
            maleDiv.current.className = styles.radioDivActive;
        }

        // femaleDiv.current.classList.remove(styles.radioDivActive)

        // if(maleDiv.current.classList = styles.radioDivActive) {
        //     femaleDiv.current.classList.remove(styles.radioDivActive)
        //     femaleDiv.current.classList.add(styles.radioDiv)

        // }

        
        
        
        
        if (event.target.name = "male") {
            
            setGender(true)
            
            setPersonalInfo({
                ...personalInfo,
                [event.target.name] : gender
            })
        } 
         if (event.target.name = "female") {

            setGender(!gender)
            setPersonalInfo({
                ...personalInfo,
                gender : gender
            })
        }

        // console.log(gender)
        
        

        // if(event.target.className = styles.radioDivActive) {
            
            
        // } else {
        //     event.target.classList.remove(styles.radioDivActive)
        // }
        console.log(event.target.className)
    }

    const changeHandler = event => {

            setPersonalInfo(
                {...personalInfo,[event.target.name] : event.target.value}
            )
        }

    return (
        <div className='bodyRegister'>
            <Toaster/>
            <form>
            <div className={styles.personInfo}>
            <h4 className={styles.titleH}>اطلاعات فردی</h4>
            <div className={styles.hrow}></div>

            <div className={styles.nameDiv}>
                <span className='errorMsgInput'>{errors.first_name}</span>
                <input className={styles.inputNameDivTwo} name="first_name" type="text" value={personalInfo.first_name} onChange={changeHandler}/>
                <span className={styles.subTitle}>: نام </span>
            </div>

            <div className={styles.nameDiv}>
            <span className='errorMsgInput'>{errors.last_name}</span>
                <input className={styles.inputNameDivTwo} name="last_name" type="text" value={personalInfo.last_name} onChange={changeHandler} />
                <span className={styles.subTitle}>: نام خانوادگی </span>
            </div>

            {/* <div className={styles.fatherNameDiv}>
                <input className={styles.inputNameDivTwo} name="fatherName" type="text" value={personalInfo.fatherName} onChange={changeHandler} />
                <span className={styles.subTitle}>: نام پدر </span>
            </div> */}

            <div className={styles.nameDiv}>
            <span className='errorMsgInput'>{errors.nationalCode}</span>
                <input className={styles.inputNameDivTwo} name="nationalCode" type="number" value={personalInfo.nationalCode} onChange={changeHandler} />
                <span className={styles.subTitle}>: کد ملی </span>
            </div>

            <div className={styles.nameDiv}>
            <span className='errorMsgInput'>{errors.phoneNumber}</span>
                <input className={styles.inputNameDivTwo} name="phoneNumber" type="number" value={personalInfo.phoneNumber} onChange={changeHandler} />
                <span className={styles.subTitle}>:شماره موبایل </span>
            </div>

            <div className={styles.nameDiv}>
            <span className='errorMsgInput'>{errors.password}</span>
                <input className={styles.inputNameDivTwo} name="password" type="number" value={personalInfo.password} onChange={changeHandler} />
                <span className={styles.subTitle}>:رمز عبور</span>
            </div>

            <div className={styles.nameDiv}>
            <span className='errorMsgInput'>{errors.confirm_password}</span>
                <input className={styles.inputNameDivTwo} name="confirm_password" type="number" value={personalInfo.confirm_password} onChange={changeHandler} />
                <span className={styles.subTitle}>:تکرار رمز عبور </span>
            </div>

            <div className={styles.nameDiv}>
                
                

                <div> 
                {/* <input  onChange={chooseMale} type="radio" name="male" /> */}
                <div onClick={chooseMale} ref={maleDiv} name="male" className={styles.radioDiv}></div>
                <span className={styles.spanRadio}>مرد</span>
                </div>
                
                <div> 
                <div onClick={chooseMale} ref={femaleDiv} name="female" className={styles.radioDiv}></div>
                <span className={styles.spanRadio}>زن</span>
                </div>

                <span className={styles.subTitle}>: جنسیت </span>
            </div>

            

            </div>
            <button onClick={register}>send data</button>
            <br/>
            {/* <button onClick={getAllData}>get data</button> */}
            </form>
            
        </div>
    );
};

export default PersonInfo;