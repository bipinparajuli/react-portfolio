import React from 'react'
import { FaFacebook,FaGithub,FaInstagram,FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const Social = () => {
    return (
        <div>
            <div style={{display:"flex",marginTop:"5% "}}>
                <a href="https://www.facebook.com/bipin.sharma.37051"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/bipin-parajuli-6580a3190/"><FaLinkedin /></a>
                <a href="https://github.com/bipinparajuli"><FaGithub /></a>
                <a href="https://www.instagram.com/bipinprjl/"><FaInstagram /></a>
                </div>
        </div>
    )
}

export default Social
