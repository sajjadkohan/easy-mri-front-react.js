import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import "../styles/boxBtn.css"

const BoxBtn = (props) => {
  return (
    <div>
    <div className='box'>
                <Link to="">
                <div className='text'>{props.text}</div>
                <div className='icon'>
                    <span>
                    <FontAwesomeIcon icon={props.icon} />
                    {/* <img className='imgIcon' src={loginIcon} /> */}

                    </span>
                </div>
                </Link>
            </div>    
    </div>
  )
}

export default BoxBtn