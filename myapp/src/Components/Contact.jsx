import React from 'react'
import './Contact.css'

// style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
export default function Contact() {
  const handleRedirect = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdSxqATl1mvl5SkrwASeRuIW4VaHG0jwH8LKc-pk0CMi9PTYA/viewform?usp=dialog";
  };
  return (
    <div className='contact-container'>
      <div id='contact' className='animate__animated animate__backInLeft'>
      <h1 id='phone'>PHONE:</h1>
      <h1 id='number'> 9949098087</h1>
      <h1 id='address'>ADDRESS:</h1>
      <h1 id='my_add'> 18-200, Mes Colony, Venkatapuram, Alwal, Sec, 500015</h1>
      <h1 id='email_id'>EMAIL:</h1>
      <h1 id='my_email'>amanvivekanand@gmail.com</h1>
      </div>
      <div id='send-msg' className='animate__animated animate__backInRight'>
        <h1>Contact Us</h1>
        <button className='snd-btn' onClick={handleRedirect} >
        Fill Out the Contact Form!
      </button>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdSxqATl1mvl5SkrwASeRuIW4VaHG0jwH8LKc-pk0CMi9PTYA/viewform?embedded=true" width="640" height="776" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
        {/* <div className='inline-inputs'>
             <input id='send-name' placeholder='Name'></input>
             <input id='email' placeholder='Email'></input>
        </div >
        <div className='inline-inputs2'>
             <input id='subject' placeholder='Subject'></input>
        </div>  
        <div className='inline-inputs3'>
             <input id='message' placeholder='Message'></input>
        </div> 
        <div className='snd-btn'>
        <button><a href='#'>Send Message!</a></button>
        </div> */}
      </div>
    </div>
  )
}
