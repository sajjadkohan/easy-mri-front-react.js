import React from 'react'


// style
import "../styles/publicStyle.css"

// form
import PersonInfo from '../PersonInfo'
import HeaderDefault from '../HeaderDefault'

const registerUserPage = () => {
  return (
    <div>
      <HeaderDefault/>
        <div className='p-top-50'>
        <PersonInfo/>
        </div>
    </div>
  )
}

export default registerUserPage;
