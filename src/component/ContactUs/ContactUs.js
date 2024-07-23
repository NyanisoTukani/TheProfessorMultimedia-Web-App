import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'
const ContactUs = () => {

    const [fname,setName]  = useState('');
    const [email,setEmail]  = useState('');
    const [phoneNumber,setPhoneNumber]  = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_jewalaa';
        const templateId = 'template_tkj1y49';
        const publicKey = 'SfLigHbzXLVl4R9PU';

        const templateParam = {
            from_name:fname,
            from_email:email,
            from_phoneNumber:phoneNumber,
            to_name:'Nyaniso',
            message:message,
        };

        //Send email using my EmailJs

        emailjs.send(serviceId,templateId,templateParam,publicKey)
               .then((response) => {
                    alert('Email sent Successfully', response);
                    setName('');
                    setEmail('');
                    setPhoneNumber('');
                    setMessage('');
               })
               .catch((error) => {
                    alert.error('Error sending email', error);
               });
    }

   
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
                        <form onSubmit={handleSubmit} className='form-inputs'>
                            <div className='inputs'><input type='text' placeholder='Your Name....' className='textfield' value={fname} onChange={(e) => setName(e.target.value)} /></div>
                            <div className='inputs'><input type='text' placeholder='Your Email....' className='textfield' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                            <div className='inputs'><input type='text' placeholder='Your Phone Number....' className='textfield' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></div>
                            <div className='inputs'><textarea  className='textArea' placeholder='Write a message....' value={message}  onChange={(e) => setMessage(e.target.value)}  /></div>
                            <div className='buttons'><button type='submit'>Submit</button></div>
                        </form>
                    </div>
                </div>
            </>
        )
}
export default ContactUs