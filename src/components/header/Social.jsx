import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Social = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/adan-amelfi-santana-rivas/"  target='blank'><BsLinkedin/></a>
        <a href="https://github.com/Amelfi" target='blank'><FaGithub/></a>    
    </div>
  )
}

export default Social