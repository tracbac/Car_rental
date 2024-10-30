import React, { useState } from "react";
import '../styles/booking-form.css';
import { Form, FormGroup, Button } from "reactstrap";

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [passengers, setPassengers] = useState("1 person");
  const [luggage, setLuggage] = useState("1 luggage");
  const [journeyDate, setJourneyDate] = useState("");
  const [journeyTime, setJourneyTime] = useState("");
  const [message, setMessage] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    
    const bookingData = {
      firstName,
      lastName,
      email,
      phone,
      fromAddress,
      toAddress,
      passengers,
      luggage,
      journeyDate,
      journeyTime,
      message,
    };

  
    console.log("Booking Data:", bookingData);
    setBookingConfirmed(true);
    
 
    resetForm();
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setFromAddress("");
    setToAddress("");
    setPassengers("1 person");
    setLuggage("1 luggage");
    setJourneyDate("");
    setJourneyTime("");
    setMessage("");
  };

  return (
    <div>
      {bookingConfirmed && <div className="alert alert-success">Booking Confirmed!</div>}
      <Form onSubmit={submitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            placeholder="From Address"
            value={fromAddress}
            onChange={(e) => setFromAddress(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            placeholder="To Address"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            <option value="1 person">1 Person</option>
            <option value="2 person">2 Person</option>
            <option value="3 person">3 Person</option>
            <option value="4 person">4 Person</option>
            <option value="5+ person">5+ Person</option>
          </select>
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <select value={luggage} onChange={(e) => setLuggage(e.target.value)}>
            <option value="1 luggage">1 luggage</option>
            <option value="2 luggage">2 luggage</option>
            <option value="3 luggage">3 luggage</option>
            <option value="4 luggage">4 luggage</option>
            <option value="5+ luggage">5+ luggage</option>
          </select>
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="date"
            value={journeyDate}
            onChange={(e) => setJourneyDate(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="time"
            value={journeyTime}
            onChange={(e) => setJourneyTime(e.target.value)}
            className="time__picker"
            required
          />
        </FormGroup>

        <FormGroup>
          <textarea
            rows={5}
            className="textarea"
            placeholder="Write"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </FormGroup>
        <Button type="submit" color="primary">Book Now</Button>
      </Form>
    </div>
  );
};

export default BookingForm;
