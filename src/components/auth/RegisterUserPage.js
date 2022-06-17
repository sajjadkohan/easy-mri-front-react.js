import React from 'react'

// style
import "../styles/publicStyle.css"

// form
import PersonInfo from '../PersonInfo'

const registerUserPage = () => {
  return (
    <div>
        <div className='p-top-50'>
        <PersonInfo/>
        </div>
    </div>
  )
}

export default registerUserPage;
