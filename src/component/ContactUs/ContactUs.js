import React, {Component} from 'react';
import './ContactUs.css'
export class ContactUs extends Component{

    render(){

        return(

            <>
                <div className='contactUs-section'>
                    <div className='contactus-heading'>
                        <h1>Our Multimedia Solutions allow your<br/>Business to increase productivity</h1>
                    </div>
                </div>
                <div className='contactUs-form-container'>
                    <div className='contactUs-sub-heading'><h1>Want to work with us or have a question?</h1></div>
                    <div className='contact-us-form'>
                        <form className='form-inputs'>
                            <div className='inputs'><input type='text' placeholder='Your Name....' className='textfield' name='name' /></div>
                            <div className='inputs'><input type='text' placeholder='Your Email....' className='textfield' name='email' /></div>
                            <div className='inputs'><input type='text' placeholder='Your Phone Number....' className='textfield' name='phonenumber' /></div>
                            <div className='inputs'><textarea  className='textArea' placeholder='Write a message....' name ='message' /></div>
                            <div className='buttons'><button type='submit'>Submit</button></div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default ContactUs