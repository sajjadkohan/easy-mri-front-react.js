import React from 'react';
import Header from './Header';

// styles
import styles from './styles/RegisterPage.module.css';
import "./styles/registerPage2.css";

import PersonInfo from './PersonInfo';
import MriInfo from './MriInfo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

import ContextProvider from './ContextProvider';

// toaster
import toast, { Toaster } from 'react-hot-toast';

// send function

const RegisterPage = () => {

    const saveData = (event) => {

        event.preventDefault();
        toast.success("اطلاعات با موفقیت ثبت شد")

    }

    return (
        <div className="bodyRegister">
            <Header/>
            <Toaster/>
            
            <div className={styles.container}>
            <div className={styles.PersonInfoRight}>
                 <PersonInfo/>
            </div>
            <div className={styles.mriInfoLeft}>
                <MriInfo/>

                <Button onClick={saveData} className={styles.btnSave} variant="contained" color="success" >ثبت اطلاعات <FontAwesomeIcon icon="save" /></Button>
            </div>
            
            </div>
                

        </div>
    );
};

export default RegisterPage;