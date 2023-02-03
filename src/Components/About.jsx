import React from 'react'
import style from './About.module.css'
import { Button } from '@mui/material'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Link } from '@mui/material'

const About = () => {
  return (
    <>
        <div className={style.about}>
            <div className={style.wrap}>
            <h2>Hello, I'm <span>Jan Mackovic</span> </h2>
            <h4>Web Developer</h4>
            <p>Softwere Engineer specializing in Frontend Web Development with React</p>
            <Link href="#project">
              <Button className={style.btn} >My Work <AiOutlineArrowDown /></Button>
             
            </Link>
            
            </div>

        </div>
    </>
  )
}

export default About