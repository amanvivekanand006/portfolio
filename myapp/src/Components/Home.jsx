import React from 'react'
import "./Home.css"
import 'animate.css';

export default function Home() {
  return (
    <div className='home'>
      <h1 className='animate__animated animate__backInDown animate__delay-1s'>Welcome!</h1>
      <div className='devop-tag'>
      <h1 className='animate__animated animate__backInLeft animate__delay-2s'>I am a </h1>
      <h1 className='animate__animated animate__backInRight animate__delay-3s' id='web'>Web Developer</h1>
      </div>
      <div className='btn'>
        <button><a href='#project'>View Work!</a></button>
        {/* <button>Hire Me!</button> */}
      </div>
    </div>
  )
}
