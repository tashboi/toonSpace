import React from 'react';
import emailjs from 'emailjs-com';

export default function Booking121() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('w18011022', 'template_rrfbpee', e.target, 'GtMhllrEOQFZkU0ZV')
            .then(() => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className = "react-chatbot-kit-chat-bot-message">
            <form className="contact-form" onSubmit={sendEmail}>
                <h2>Booking Form</h2>
                <label>Name:</label>
                <input type="text" name="from_name" />
                <br/>
                <label>Email:</label>
                <br/>
                <input type="email" name="from_email" />
                <br/>
                Prefered date for 1 to 1:
                <input type="date" id="date" name="date" />
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};





