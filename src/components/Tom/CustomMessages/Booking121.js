import React from 'react';
import "./booking121.css"
const Booking121 = () => {
    return (
        <div className="BookingForm">
            <form action="">
                <h2>Booking Form</h2>
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
                Prefered date for 1 to 1:
                <input type="date" id="date" name="date" />
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Booking121;