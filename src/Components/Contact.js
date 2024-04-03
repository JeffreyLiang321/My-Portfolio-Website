import React from 'react';
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <h2>Please feel free to reach out. I'd love to connect and get to know you.</h2>
            <div className="contact-grid">
                <div className="contact-item">
                    <SiGmail size={50} className="icon"/>
                    <a href="mailto:jeffreymingliang@gmail.com">jeffreymingliang@gmail.com</a>
                </div>
                <div className="contact-item">
                    <FaLinkedin size={50} className="icon"/>
                    <a href="https://www.linkedin.com/in/jeffrey-liang-a04760291/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
                <div className="contact-item">
                    <FaGithub size={50} className="icon"/>
                    <a href="https://github.com/JeffreyL420" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;