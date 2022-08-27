import React from 'react'
import AnimatedPage from './AnimatedPage'
import './Home.css'

function Home() {
  return (
    <AnimatedPage className='center center-mobile'>
      <h1 className='hover-underline-animation'>I am,</h1>
      <h1 className='hover-underline-animation'>Mazen M. Al-Sharif,</h1>
      <h1 className='hover-underline-animation'>A Mobile App Developer</h1>
      <div className='intro'>
        <p>
          Q: Why is my profession important?<br></br><br />
          A: Because it introduces your business to different audiences on different platforms.<br /><br />
          <br /></p>
          <p>
          Q: What do I think about my industry?<br/><br />
          A: I think it is an evergrowing area of success.<br /><br />
          <br /></p>
          <p>
          Q: Which of my skills help me thrive in my work?<br /><br />
          A: My skill of working with full concentration for a prolonged amount of time.<br /><br />
        </p>
      </div>
    </AnimatedPage>
  )
}

export default Home