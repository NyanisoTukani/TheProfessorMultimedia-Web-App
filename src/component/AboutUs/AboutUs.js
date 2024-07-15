import React, { Component } from 'react';
import './AboutUs.css'

export class AboutUs extends Component{
    render(){
       return(
        <>
            <div className='aboutus-section'>
              
              <div className='aboutus-image'>
              <img src='./images/about-img.jpg'></img>
              </div>
              <div className="aboutus-sub-image">
                <div className='small-image'>
                <img src='./images/about sub-image.jpg'></img>
                </div>
                <div className='sub-text-image'>
                <img src='./images/megaphone.png' alt='Icon' width="20px"></img>
                <p>Quality Service</p>
                </div>
              </div>
              <div className="about-us-text">
                    
                    <div className=' aboutus-heading'>
                        <h1>We Made World of Multimedia very Simple</h1>
                    </div>
                    <div className='aboutus-sentence'>
                        <p>At TheProfessor Group, we strive to simplify the world of multimedia. Our unique approach sets us apart, allowing us to deliver exceptional work while prioritizing client satisfaction. We are committed to following our principles, ensuring that every project reflects our dedication to quality and creativity. Our mission is to make your vision a reality while keeping you happy every step of the way.</p>
                    </div>

                    <div className='mission'>
                      <div className='our-mission'>
                        <h2> <img src='./images/down.png' alt="icon" height="20px"/> Our Mission</h2>
                        <p>Simplify multimedia with quality, creative solutions.</p>
                      </div>
                      <div className='our-mission'>
                        <h2> <img src='./images/down.png' alt="icon" height="20px"/> Our Mission</h2>
                        <p>Innovate continuously for client satisfaction.</p>
                      </div>
                    </div>
              </div>
            </div>
        </>
       )
    }
}
export default AboutUs