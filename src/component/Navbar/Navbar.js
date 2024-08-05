import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

export class Navbar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        return (
            <>
                <nav>
                    <a href="#" className="logo">
                        <img src="./images/TheProfessorFilms.jpg" alt="logo" width="100px" />
                    </a>

                    <div>
                        <ul id="navbar" className={this.state.clicked ? '#navbar active' : '#navbar'}>
                            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li><Link to="aboutus" smooth={true} duration={500}>About Us</Link></li>
                            <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                            <li><Link to="contactus" smooth={true} duration={500}>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div id='mobile' onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
