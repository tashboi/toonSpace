import React from 'react';
import emailjs from 'emailjs-com';

/**
 * A Javascript file which is a custom message. The custom message displays a contact form for booking a 121
 * which then sends an email to the client with the informationm from the form. it uses the emailJS package to do this.
 *
 *
 * @author Thomas Ashby
 */

export default function Booking121() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('w18011022', 'template_rrfbpee', e.target, 'GtMhllrEOQFZkU0ZV')
            .then(() => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className = "react-chatbot-kit-chat-bot-message">
            <form className="Booking-Form" onSubmit={sendEmail}>
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





