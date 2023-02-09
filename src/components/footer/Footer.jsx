import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {
  return (
   <footer>
    <a href="#header" className='footer__log'>Adán Santana</a>
      <ul className='permalinks'>
          <li><a href='#header'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/adan-amelfi-santana-rivas/"><AiOutlineLinkedin/></a>
        <a href="https://github.com/Amelfi"><AiOutlineGithub/></a>
      </div>
   </footer>
  )
}

export default Footer