import React from 'react'
import "./styles/indexPage.css";
import { ButtonBase , Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// icons
import registerIcon from "./images/icons/register.png";
import loginIcon from "./images/icons/login.png";


const IndexPage = () => {
  return (
    <div className='indexPage container-fluid anim'>
        <div className='parrentBox d-flex'>
            <div className='box'>
                <Link to="/login">
                <div className='text'>ورود</div>
                <div className='icon'>
                    <span>
                    <img className='imgIcon' src={loginIcon} />

                    </span>
                </div>
                </Link>
            </div>
            <div className='box'>
             <Link to="/register">
                <div className='text'>ثبت نام</div>
                <div className='icon'>
                    <span>
                    {/* <FontAwesomeIcon icon='long-arrow-alt-right' /> */}
                    <img className='imgIcon' src={registerIcon} />
                    </span>
                </div>
                </Link>
            </div>
        </div>

        {/* <div className='smile'></div> */}

        <div className='parrentBox d-flex'>
            <div className='box'>
                <Link to="/login">
                <div className='text'>اپلود فایل MRI</div>
                <div className='icon'>
                    <span>
                    <FontAwesomeIcon icon='file' />
                    {/* <img className='imgIcon' src={loginIcon} /> */}

                    </span>
                </div>
                </Link>
            </div>
            <div className='box'>
             <Link to="/register">
                <div className='text'>آپلود گزارش MRI</div>
                <div className='icon'>
                    <span>
                    <FontAwesomeIcon icon='book-open' />

                    {/* <img className='imgIcon' src={registerIcon} /> */}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default IndexPage