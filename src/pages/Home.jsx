import React from 'react'
import Navbar from '../layout/Navbar'
import Banner from '../layout/Banner'
import E_learn from '../layout/E-learn'
import Courses from '../layout/Courses'
import Topic from '../layout/Topic'
import Courses2 from '../layout/Courses2'
import Footer from '../layout/Footer'
import Student from '../layout/Student'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <E_learn/>
      <Courses/>
      <Topic/>
      <Courses2/>
      <Student/>
      <Footer/>
    </div>
  )
}

export default Home
