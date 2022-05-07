import React from 'react';

const EnquiryForm = () => {
    return (
        <div className = "react-chatbot-kit-chat-bot-message">
            <form>
                <h2>Enquiry Form</h2>
                First Name:
                <input type="text" id="fname" name="fname" />
                <br></br>
                Last Name:
                <input type="text" id="lname" name="lname" />
                <br></br>
                Email:
                <br></br>
                <input type="email" id="email" name="email" />
                <br></br>
                Type your enquiry below:
                <textarea name="enquiry" rows="4" cols="20"/>
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default EnquiryForm;