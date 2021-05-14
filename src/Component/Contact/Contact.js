import React from 'react';
import classes from './Contact.module.css';
import {Form, Row,Button} from 'react-bootstrap'
import emailjs from 'emailjs-com';
import {FaAddressBook,FaEnvelope,FaPhone} from 'react-icons/fa'
const Contact = () => {

const sendEmail=(e)=>{
    e.preventDefault();
emailjs.sendForm('gmail','template_5ufiggo',e.target,'user_GKhLNyE8Tb8S7ZXJ7Y7qb')
.then((result)=>{
    // console.log(result.text);
},(error)=>{
    // console.log(error.text);
})

e.target.reset();

}

    return (
       <div className={classes.Contact}>
       <div className={classes.Main}>
            <div className={classes.Content}>
                <h2>Drop me a message</h2>
                <Form onSubmit={sendEmail}>
                <input type='text' name='name' className={classes.outline} placeholder='Your Name' />
                <input type='text' name='email' className={classes.outline} placeholder='Your Email'  />
                <input type='text' name='subject' className={classes.outline} placeholder='Subject'/>
                <textarea name='message' placeholder='Your Messege' />
                <Button type='submit' className='btn btn-success' name=''>Send</Button>
                </Form>
                
            </div>
            

        </div>
        <div className={classes.Image}>
        <div>
            <FaAddressBook/>
<h4 style={{textAlign:'center'}}>Address</h4>
<p className='leap'>Thali, Kathmandu</p>
</div>
<div>
<FaEnvelope />
<h4 style={{textAlign:'center'}}>Email</h4>
<p className='leap'>bipinprjl@gmail.com</p>
</div>
<div>
<FaPhone />
<h4 style={{textAlign:'center'}}>Contact No.</h4>
<p className='leap'>+977-9826941835</p>
</div>
    </div>
    </div>
    )
}

export default Contact
