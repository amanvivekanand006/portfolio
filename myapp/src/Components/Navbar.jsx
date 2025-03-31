// import React from 'react'
// import Home from './Home'
// import About from './About'
// import './Navbar.css'

// export default function Navbar() {
//   return (
//     <div>
//       <nav className='nav-container'>
//         <div className='logo'>
//             <h1>Aman</h1>
//         </div>
//         <ul className='sections'>
//             <li ><a href='#home'>Home</a></li>
//             <li><a href='#about'>About</a></li>
//             {/* <li><a href='#'>Services</a></li> */}
//             <li><a href='#project'>View Work</a></li>
//             <li><a href='#contact-con'>Contact</a></li>
//         </ul>
//         <button className='button'><a href='#contact-con'>Hire Me!</a></button>
//       </nav>
//     </div>
//   )
// }


import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <h1 class="gradient-text">Aman</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menu Items */}
      <ul className={menuOpen ? 'sections open' : 'sections'}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#project" onClick={toggleMenu}>View Work</a></li>
        <li><a href="#contact-con" onClick={toggleMenu}>Contact</a></li>
      </ul>

      {/* Hire Me Button (Hidden in Mobile) */}
      <button className="button">
        <a href="#contact-con">Hire Me!</a>
      </button>
    </nav>
  );
}
