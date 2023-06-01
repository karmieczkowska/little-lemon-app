import React from 'react'
import "../styles/Reservation.css"
import Slider from '../components/Slider'

function Reservations() {
  return (
    <div>
        <div className="reservations">
            <div className="text">
              <h2>To reserve a table, call us on the number below</h2>
              <h3>111-222-33</h3>
              <pre>
                <h5>Opening hours:</h5>
                <h5>Mo-Fri: 9 AM - 10 PM</h5>
                <h5>Sat-Sun: 11 AM - 11 PM</h5>
              </pre>
            </div>
        </div>
        <Slider />
     </div>
  )
}

export default Reservations