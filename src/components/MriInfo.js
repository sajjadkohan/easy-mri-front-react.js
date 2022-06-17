import React,{useState,useEffect,useRef,useContext} from 'react';
import styles from './styles/RegisterPage.module.css';
import './styles/RegisterPage.css';

import axios from 'axios';

import MriUpload from './MriUpload';
import RepotrtUpload from './ReportUpload';

// calender
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";

// validate
import { mriValidate } from './mriValidate';

// context
import { dataContext } from './ContextProvider';

// REDUX
import { useDispatch } from 'react-redux';



const MriInfo = () => {

    const dispatch = useDispatch();

    // states

    const [infoOpen , setInfoOpen] = useState(false);
    const [personalInfo,setPersonalInfo] = useState({

        userID : "",
        Study : "",
        type : "",
        dateSave : "",

    })

    const [errors,setErrors] = useState({});

// end states

const contextt = useContext(dataContext);

    const datePick = useRef(null);
    const popOver1 = useRef(null);

    useEffect(async()=> {

        let BASE_URL2 = 'http://localhost:5000/user/list';
       await axios.get(BASE_URL2)
        .then(res => console.log(JSON.stringify(res.data)))
        .catch(err => {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>",err);
        })

        if(!errors.Study && !errors.userID && !errors.type && !errors.dateSave) console.log(">>>>>>ok");

        setErrors(mriValidate(personalInfo))
        Object.entries(errors).forEach(([key,value])=>{
            console.log(key);

        })
        datePick.current.childNodes[0].setAttribute("class", styles.inputNameDivTwoo)
        // console.log(contextt)

    },[personalInfo])

    const send = event=> {
        event.preventDefault();
        let dataa = personalInfo;
        let BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

        
            axios.post(BASE_URL,dataa)
            .then(response => {console.log(response.data)})
        

    }
    const changeHandler = event => {

            setPersonalInfo(
                {...personalInfo,[event.target.name] : event.target.value}
                
            )
            // console.log(personalInfo)
        

    }

    // info click function
    function infoToggle (event) {
        console.log(event)

         setTimeout(()=> {
            event.classList.remove("d-nonee")


        },100)  

        setTimeout(()=> {
            event.classList.add("d-nonee")


        },7000)
        
    }


    function initCounter () {
        let counter = 20;

        return function () {
            console.log(counter++);
        }

    }

    const changeHandlerTwo = async(event)=> {

        let dateVal = datePick.current.childNodes[0];

        // dateVal رف است
        
        datePick.current.childNodes[0].setAttribute("name", "dateSave");
        await datePick.current.childNodes[0].setAttribute("value", await dateVal.value);
        datePick.current.childNodes[0].setAttribute("onChange", "changeHandlerTwo()");


        await setPersonalInfo(
            {...personalInfo,[dateVal.name] : dateVal.value}
            
        )

    }

    return (
        <div>
            <div className={styles.mriInfo}>
                <h1>{contextt}</h1>
            <form>
            
            <h4 className={styles.titleH}>MRI اطلاعات </h4>
            <div className={styles.hrow}></div>

            <div className={styles.nameDiv}>
            <div 
            onClick={(event)=> infoToggle(event.target.nextSibling)}
            
             className={styles.infoBtnParrent}> 
            <div className={styles.infoBtn}>i</div>
             <span className="textErrorShow d-nonee">فقط اعداد را وارد کنید<br/>مثال : 1234</span>
                
            
            </div>
                <input className={!errors.userID? styles.inputNameDivTwo : styles.errorInput} name="userID" type="text" value={personalInfo.userID} onChange={changeHandler} />
               
                <span className={styles.subTitle}>: شناسه عددی </span>

                
            </div>

            <div className={styles.familyDiv}>
            <div
             onClick={(event)=> infoToggle(event.target.nextSibling)} className={styles.infoBtnParrent}> 
            <div className={styles.infoBtn}>i</div>
             <span className="textErrorShow d-nonee">چهار حرف بزرگ برای شروع و بعد (/) و بعد دو حرف بزرگ <br/>ABCD/EF : مثال  </span>
             
            
            </div>
                <input className={!errors.Study? styles.inputNameDivTwo : styles.errorInput} name="Study" type="text" value={personalInfo.Study} onChange={changeHandler}/>
                <span className={styles.subTitle}>: Study </span>

            </div>

            <div className={styles.fatherNameDiv}>
            <div 
             onClick={(event)=> infoToggle(event.target.nextSibling)}
            className={styles.infoBtnParrent}> 
            <div className={styles.infoBtn}>i</div>
             <span className="textErrorShow d-nonee">بیش از 2 حرف را وارد کنید</span>
               
            
            </div>
                <input className={!errors.type? styles.inputNameDivTwo : styles.errorInput} name="type" type="text" value={personalInfo.type} onChange={changeHandler}/>
                <span className={styles.subTitle}>: نوع مصدومیت </span>
            </div>


            <div className={styles.birthDayDiv}>
                {/* <input className={styles.inputNameDivTwo} name="dateOfBirth" type="number" value={personalInfo.dateOfBirth} onChange={changeHandler}/> */}
                <div 
                 onClick={(event)=> infoToggle(event.target.nextSibling)}
                className={styles.infoBtnParrent}> 
            <div className={styles.infoBtn}>i</div>
             <span className="textErrorShow d-nonee">تاریخ را به صورت صحیح از (2 رقم) روز / (2 رقم) ماه / (4 رقم)سال وارد کنید</span>
                
            
            </div>
               <div className={!errors.dateSave ? styles.inputNameDivTwo : styles.errorInput}>
               <DatePicker
                
                value={personalInfo.dateSave}
                onChange={changeHandlerTwo}
                // name="dateOfBirth"
                calendar={persian}
                locale={persian_en}
                calendarPosition="bottom-right"
                ref={datePick}
                />
               </div>
                
                
                <span className={styles.subTitle}>: MRI تاریخ ثبت  </span>
          
            </div>

            </form>
            <button onClick={send}>send data vvv</button>
            <button>send to stata</button>

            <MriUpload/>
            <RepotrtUpload/>
            
            </div>
        </div>
    );
};

export default MriInfo;