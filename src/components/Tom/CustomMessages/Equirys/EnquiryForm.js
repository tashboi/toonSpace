import React from 'react';
import emailjs from 'emailjs-com';

/**
 * A Javascript file which is a custom message. The custom message displays an enquiry form which sends an equiry to the client.
 * It uses the emailJS package to do this.
 *
 * @author Thomas Ashby
 */


export default function EnquiryForm() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('w18011022', 'template_e87cagj', e.target, 'GtMhllrEOQFZkU0ZV')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className = "react-chatbot-kit-chat-bot-message">
        <form className="contact-form" onSubmit={sendEmail}>
            <h2>Enquiry Form</h2>
            <label>Name:</label>
            <input type="text" name="from_name" />
            <br/>
            <label>Email:</label>
            <br/>
            <input type="email" name="from_email" />
            <br/>
            <label>Subject:</label>
            <input type="text" name="subject" />
            <br/>
            <label>Message:</label>
            <textarea name="message" />
            <br/>
            <input type="submit" value="Send" />
        </form>
        </div>
    );
};

