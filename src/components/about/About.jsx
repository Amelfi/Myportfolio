import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
               <small>1+ Year Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
               <small>1+ Year Working</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyects</h5>
               <small>1+ Year Working</small>
            </article>
          </div>
          <p>Systems Engineer, Full Stack Developer oriented towards teamwork, I like to learn and be up-to-date in the world of programming.</p>

<h2>My work history:</h2>
<p>For 5 years I developed as a bank transaction agent at BBVA Compass Bank through the contractor company Conduent where I also had the opportunity to train new hired personnel, while I was there I was also able to graduate in Systems Engineering.</p>

<p>Currently, I am part of a team of freelancers called Software Scientists, where I have learned technologies such as Laravel, Mysql, and React. At the same time I am finishing the intensive Henry bootcamp where I have expanded my knowledge in Javascript, React, Node, Redux, Postgresql, Sequelize, CSS, HTML, Scrum methodology, etc.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About