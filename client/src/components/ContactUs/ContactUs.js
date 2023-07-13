import React from "react";
import './ContactUs.css';

const ContactUs = () => {
    return(
        <section>
            <div className="contact-us-style">
                <h2 className="contact-text">Contact Us</h2>
                <p className="contact-info">Are you passionate about 3D printing as much as we are?  Would you like to contribute?  If so please feel free to reach out to our team by clicking on the email link below.  We will be in touch with you as opportunities become available.  We look foward to chatting with you soon.</p>
                <a classname='email-link' href='mailto:contributors@quackcraft.com'>Click here to contact us!</a>
            </div>
        </section>
    )
}

export default ContactUs;

