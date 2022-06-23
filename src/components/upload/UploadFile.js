import React,{useEffect, useRef , useState} from 'react'

import HeaderDefault from '../HeaderDefault'
import "../styles/indexPage.css";
import "../styles/uploadFile.css";
import LoginModal from '../modals/LoginModal';

import BoxBtn from '../smallComponent/BoxBtn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { autoLogin } from '../../redux/user/userAction';


const UploadFile = () => {

    const isLogin = useSelector(state => state.userInfo.isLogin);
    const user = useSelector(state => state.userInfo);


    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [fileName , setFileName] = useState();
    const [token , setToken] = useState();

    const modalTag = useRef();

    useEffect(async()=>{

        let tokenVar = localStorage.getItem("token");
        setToken(localStorage.getItem("token"));
        // console.log(",,,,,,,,",token);
        // console.log("IS LOGIN",isLogin);
        await dispatch(autoLogin());
        console.log("user",user);
    },[])


    // file uploader
    const fileUploader = (e) => {
        const fileNameVal = e.target.files[0].name;
        setFileName(fileNameVal)

        // if(!token) navigate("/login")

        axios.post("http://localhost:5000/user/uploadmri",fileName,{
            headers : {
                'authorization' : `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })

    }

// token



  return (
    <div>
        <HeaderDefault/>
      
             <div ref={modalTag} className={localStorage.getItem("token") ? "d-none" : "modal"}> <LoginModal/> </div>

            <div className='anim page'>
            <h1 className='dir-rtl'>لطفا در کادر زیر کلیک کنید و فایل MRI خودرا بارگذاری کنید</h1>
        <div>
            <input onChange={fileUploader} className='inputUpload' name='filee' type="file"/>
        <BoxBtn text="آپلود فایل" icon="plus" />
        </div>

        <h4 className='fileName'>{fileName}</h4>

        <div className='progressBar'>
            <div className={fileName?'bar w-100' : 'bar'} ></div>
        </div>

        </div>
            
    </div>
  )
}

export default UploadFile