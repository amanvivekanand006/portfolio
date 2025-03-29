import React from 'react'
import img1 from './images/1317.jpg'
import './About.css'


export default function About() {
  return (
    <div className='container'>
      <div className='animate__animated animate__swing' id='img-div'>
        <img src={img1}></img>
      </div>  
      <div className='content-div'>
         <h1 className='animate__animated animate__backInRight' id="question">Who Am I ?</h1>
         <h1 className='animate__animated animate__backInRight' id="name">V Aman</h1><br></br><br></br>
         <h2 className='animate__animated animate__backInRight' id='role'>Professional Web Developer</h2>
         <h3 className='animate__animated animate__backInRight' id='summary'> A Full Stack Developer who loves building fast, scalable, and user-friendly applications. Currently shaping powerful backends and seamless frontends at Snipe Tech Pvt Ltd, Bangalore. From crafting high-performance APIs with FastAPI & Django to dynamic React UIs, I turn ideas into reality.
          <br></br>

💡 What Drives Me 💡
<br></br>
I thrive on solving complex problems, optimizing systems, and collaborating with teams to build impactful solutions. Let’s create something amazing!
<br></br>
<br></br>

📫 Let’s Connect:
          <div className="social-icons">
            <a href="https://github.com/amanvivekanand006" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aman-v-699464275/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
<br></br>
<br></br>

🔥 Tech Stack: 
<br></br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="40" height="40" style={{ marginRight: "10px" }} />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40" style={{ marginRight: "10px" }} />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" width="40" height="40" style={{ marginRight: "10px" }} />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" width="40" height="40" style={{ marginRight: "10px" }} />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="40" height="40" style={{ marginRight: "10px" }} />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" style={{ marginRight: "10px" }} />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="40" height="40" />
</h3>
      </div>
      
    </div>
  )
}
