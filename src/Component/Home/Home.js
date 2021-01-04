import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import classes from './Home.module.css'
import ImageContainer from '../ImageContainer/ImageContainer'
import Type from '../TypeingAnimation/Type'
import {NavLink} from 'react-router-dom';
import Social from '../SocialMedia/Social'


const Home = () => {

    return (
        <Container>
            <Row>
<div className={classes.Main}>
<ImageContainer />
<h2>Hi, I am Bipin Parajuli. I am a ...</h2>
<Type />
<NavLink to='contact'>
<Button >GET IN TOUCH</Button>
</NavLink>
<Social/>
</div>
</Row>
        </Container>
    )
}

export default Home
