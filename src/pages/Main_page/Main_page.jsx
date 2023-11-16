import React from 'react'
import Header from '../../components/Header/Header'
import './Main_page.css'
import FacultySearch from '../../components/FacultySearch/FacultySearch'

const Main_page = () => {
  return (
    <div>
        <Header/>
        <div className='facultyConatiner'>Faculty Bot</div>
        <FacultySearch/>
    </div>
  )
}

export default Main_page