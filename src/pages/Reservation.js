import React from 'react';
import "../styles/Reservation.css";
import HeroSectionComponent from '../components/HeroSectionComponent';
import Slider from '../components/Slider';
import BookingForm from '../components/BookingForm';

export default function Reservations() {

  return (
    <>
      
        <HeroSectionComponent
            heading="RESERVATIONS"
            text="To reserve a table call us on 111-222-333 or reserve a table online"
        />
        <div className="reservations">
        <BookingForm
        // availableTimes={availableTimes} updateTimes={dispatch}
        />
         </div>
        <Slider />
     
     </>
  )
}

