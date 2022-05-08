import React from 'react';
import "../App.css";
import { MainContainer, Title } from "../styles/booking.style";

function Booking() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form Submitted');
    }

    return (
        <MainContainer>
            <Title>Appointment Booking</Title>
            <form onSubmit={handleSubmit}>
                <label>First and Last Name </label>
                <input type="text" id="name"></input>

                <label>Contact Number </label>
                <input type="text" id="phone"></input>

                <label>Email Address </label>
                <input type="text" id="email"></input>

                <label>Desired Date </label>
                <input type="text" id="date"></input>

                <label>Desired Time </label>
                <input type="text" id="time"></input><br />

                <button type="cancel">Cancel</button><br />
                <button type="Submit">Book Appointment</button>
            </form>
        </MainContainer>
    );
};

export default Booking;