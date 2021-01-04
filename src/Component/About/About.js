import React from 'react'
import { FaDatabase, FaLaptop,FaStar } from 'react-icons/fa'
import classes from './About.module.css'
import {Container,Row,Col} from 'react-bootstrap'
import Social from '../SocialMedia/Social'
const About = () => {
    return (
        <div className={classes.About}>
            <h1>ABOUT</h1>
            <hr/>
 <div className={classes.Intro}>
     <strong >Who : </strong><span> Bipin Parajuli</span><br/>
     <strong>Passion : </strong><span>Software Development</span><br/>
     <strong>Age : </strong><span>21</span><br/>
     <strong>Academic : </strong><span>Bachelour</span><br/>
     <strong>Address : </strong><span>Kathmandu, Nepal</span><br/>
 </div><br/>
 
        <h1>SKILLS</h1>
        <hr/>
<Container>
    <Row className={classes.row}>
        <Col>
        <FaLaptop/>
        <h3>Front-end</h3>
        <hr/>
        <p>- HTML(5)</p>
        <p>- CSS(5)</p>
        <p>- JavaScript</p>
        <p>- Bootstrap</p>
        <p>- React</p>
        <p>- Redux</p>
        </Col>
        <Col>
        <FaDatabase/>
        <h3>Back-end</h3>
        <hr/>
        <p>- NodeJs</p>
        <p>- Firebase</p>
        <p>- Java</p>
        <p>- Sql</p>
        <p>- MongoDb</p>
        </Col>
        <Col className={classes.thirdCol}>
        <FaStar/>
        <h3>Tools</h3>
        <hr/>
        <p>- Photoshop</p>
        <p>- AdobeXD</p>
        <p>- Figma</p>
        <p>- Axios</p>
        </Col>
    </Row>
</Container>
<div className={classes.Personal}>
    <h1>PERSONAL</h1>
    <hr/>
    <p className={classes.Lato}>My name is Bipin Parajuli. Self taught with over 1 years of experience, who designs, develops, speaks and teaches about building high quality and accessible websites . I focus on creating rich seamless experiences between the product and the user. I'm always looking for creative people to vibe with, let's connect through my social channels below.</p>
</div>
<div className={classes.Social}>
<Social/>
</div>
        </div>
    )
}

export default About
