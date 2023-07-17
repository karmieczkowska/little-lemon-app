import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "../styles/Reservation.css";
//import DatePicker from '../components/DatePicker';

const availableTimes = ["17:00", "18:00", "19:00"];

export default function BookingForm () {

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comments, setComments] = useState("");

  const [time, setTime] = useState("");

//   const fetchData = () => {
//     fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js") 
//       .then(response => response.json())
//       .then(data => console.log(data));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);


//   const [finalTime, setFinalTime] = useState(
//     props.availableTimes.map((times) => <option>{times}</option>)
//   );

//   function handleDateChange(e) {
//     setDate(e.target.value);

//     var stringify = e.target.value;
//     const date = new Date(stringify);

//     props.updateTimes(date);

//     setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
//   }

  function handleSubmit(e) {
    e.preventDefault();
    setTime("12:00");
    setGuests("2");
    setName("");
    setPhoneNumber("");
  }

  return (
    <>
    <div className="reservations">
      <form onSubmit={handleSubmit}
      // style={{display: "flex", maxWidth: 200, columnGap:20}}
      >
        {/* <label for="res-date">Choose date</label>
        <input type="date" id="res-date"/> */}
        {/* <div className="datepicker">
          <DatePicker />
        </div> */}
        <div className="form">
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)} >
                {availableTimes.map((time) => {
                    return(
                        <option>{time}</option>
                    )
                })}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
            value={guests}
            onChange={(e) => setGuests(e.target.value)} />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Other</option>
          </select>
          <label htmlFor="name">Your name</label>
          <input
            type="string"
            placeholder="Your name"
            minLength={3}  id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <label htmlFor="phone-number">Your phone number</label>
          <input
            type="tel"
            placeholder="111-111-111"
            id="phone-number"
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} />
          <small style={{marginTop: -6}}>Format 123-456-789</small>
          <label htmlFor="comments">Additional Comments</label> <br></br>
          <textarea
            id="comments"
            rows={3}
            cols={50}
            placeholder="Additional Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          >
          </textarea>
          <Link className="btn" to="/confirmation" >
            Book Table
          </Link>
        </div>
      </form>
      </div>
     </>
  )
}
