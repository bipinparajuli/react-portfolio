import React from 'react'
import classes from './Project.module.css'
import {Motion,spring} from 'react-motion'

const Project = () => {
    return (
         
  <div className={classes.Project}>
  <div className={classes.ProjectItem}>
      <h1>Projects(2019-2020)</h1>
  {/* <a href='https://firsttodoapp.imfast.io/ToDo_App-master/'>▶️ TODO List (JavaScript)</a> */}
  <a href='https://bipinparajuli.github.io/BudgeCalculator/'>▶️ Budget Calculator (JavaScript)</a>
  <a href='https://bipinparajuli.github.io/GoogleMap/'>▶️ Google Map (JavaScript)</a>
  <a href='https://todo-app-cp-e2296.web.app/'>▶️ Amazone Clone (JavaScript,React,Firebase)</a>
  <a href="https://kinbechh.netlify.app/">▶️ E-Commerce (JavaScript,React,Firebase)</a>
  <a href="https://mobile-stores.netlify.app/">▶️Full-Stack E-Commerce (MERN)</a>
  <a href="http://xavierinternaltionalcollegelms.netlify.app/">▶️Library Management System(MERN)</a>
</div>
</div>
  

  
        
    )
}

export default Project
