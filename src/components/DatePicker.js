// import React, { useState } from 'react'

// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';


// function DatePicker() {
//     const [selected, setSelected] = useState();
//     const [booked, setBooked] = useState(false);
//     //const [timeValue, setTimeValue] = React.useState('00;:00');

//     const tomorrow = new Date();
//     const day = tomorrow.getDate() + 1;
//     tomorrow.setDate(day);
//     const bookedDays = [new Date(), tomorrow];
//     const bookedStyle = { border: '2px solid #333333', borderRadius: 5, background: "rgba(51, 51, 51, 0.8)" };

//     const handleDayClick = (day, modifiers) => {
//       setBooked(day && modifiers.booked);
//     };

//     // const handleTimeChange = (e) => {
//     //   const time = e.target.value;
//     //   if (!selected) {
//     //     setTimeValue(time);
//     //     return;
//     //   }
//     //   const [hours, minutes] = time.split(':').map((str) => parseInt(str, 10));
//     //   const newSelectedDate = new Date(
//     //     selected.getFullYear(),
//     //     selected.getMonth(),
//     //     selected.getDate(),
//     //     hours,
//     //     minutes
//     //   );
//     //   setSelected(newSelectedDate);
//     //   setTimeValue(time);
//     // };

//     // const handleDaySelect = (date) => {
//     //   if (!timeValue || !date) {
//     //     setSelected(date);
//     //     return;
//     //   }
//     //   const [hours, minutes] = timeValue
//     //     .split(':')
//     //     .map((str) => parseInt(str, 10));
//     //   const newDate = new Date(
//     //     date.getFullYear(),
//     //     date.getMonth(),
//     //     date.getDate(),
//     //     hours,
//     //     minutes
//     //   );
//     //   setSelected(newDate);
//     // };

//     let footerText = <p>Please pick a day.</p>;
//       if (booked) {
//       footerText = <p>This day is fully booked! Please choose another day :)</p>;
//     } else if (selected) {
//       footerText = <p>You picked {selected.toLocaleString()} .</p>;
//     }

//     const css = `
//     .my-selected:not([disabled]) {
//       font-weight: bold;
//       border: 2px solid #f4ce14;
//       background: #f4ce14;
//     }
//     .my-selected:hover:not([disabled]) {
//       border-color: #f4ce14;
//       color: #f4ce14;
//     }
//     .my-today {
//       font-weight: bold;
//       font-size: 120%;
//       color: #495f58;
//     }
//     .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
//       background-color: rgba(244, 206, 20, 0.5);
//     }
//     .reservations {
//       margin-top: 0px;
//     }
//   `;

//   const seasonEmoji = {
//     winter: '⛄️',
//     spring: '🌸',
//     summer: '🌻',
//     autumn: '🍂'
//   };

//   const getSeason = (month) => {
//     const monthNumber = month.getMonth();
//     if (monthNumber >= 0 && monthNumber < 3) return 'winter';
//     if (monthNumber >= 3 && monthNumber < 6) return 'spring';
//     if (monthNumber >= 6 && monthNumber < 9) return 'summer';
//     else return 'autumn';
//   };

// const formatCaption = (month, options) => {
//     const season = getSeason(month);
//     return (
//         <>
//             <span role="img" aria-label={season}>
//             {seasonEmoji[season]}
//             </span>{' '}
//             {format(month, 'LLLL', { locale: options?.locale })}
//         </>
//         );
//     };

//   return (
//     <>
//         <style>{css}</style>
//             <DayPicker
//               mode="single"
//               selected={selected}
//               onSelect={setSelected}
//               footer={
//                 <>
//                   {/* <p>
//                     Pick a time:{' '}
//                     <input
//                       type="time"
//                       value={timeValue}
//                       onChange={handleTimeChange}
//                       style={{background: 'rgba(255, 255, 255, 0.5)', border: '1px solid rgba(255, 255, 255, 0.7)', borderRadius: 5}}
//                     />
//                   </p> */}
//                   <p>
//                     {footerText}
//                   </p>
//                 </>
//               }
//               fromDate={new Date()}
//               required
//               showOutsideDays
//               weekStartsOn={1}
//               disabled={date => date.getDay() === 1}
//               modifiers={{ booked: bookedDays }}
//               onDayClick={handleDayClick}
//               modifiersClassNames={{
//                 selected: 'my-selected',
//                 today: 'my-today'
//               }}
//               modifiersStyles={{
//                 booked: bookedStyle,
//                 disabled: { fontSize: '75%' }
//               }}
//               styles={{
//                 caption: { color: '#495f58' }
//               }}
//               formatters={{ formatCaption }}
//             />
//     </>
//   )
// }

// export default DatePicker


import React, { useState } from 'react'

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';


function DatePicker() {
    const [selected, setSelected] = useState();
    const [booked, setBooked] = useState(false);

    const tomorrow = new Date();
    const day = tomorrow.getDate() + 1;
    tomorrow.setDate(day);
    const bookedDays = [new Date(), tomorrow];
    const bookedStyle = { border: '2px solid #333333', borderRadius: 5, background: "rgba(51, 51, 51, 0.8)" };

    const handleDayClick = (day, modifiers) => {
      setBooked(day && modifiers.booked);
    };

    // const handleDaySelect = (date) => {
    //   if (!date) {
    //     setSelected(date);
    //     return;
    //   }

    //   const newDate = new Date(
    //     date.getFullYear(),
    //     date.getMonth(),
    //     date.getDate(),
    //   );
    //   setSelected(newDate);
    // };

    let footerText = <p>Please pick a day.</p>;
      if (booked) {
      footerText = <p>This day is fully booked! Please choose another day :)</p>;
    } else if (selected) {
      footerText = <p>You picked:
        {/* {selected.toLocaleDateString()}  */}
        {format(selected, 'PP')}
        .</p>;
    }

    const css = `
    .my-selected:not([disabled]) {
      font-weight: bold;
      border: 2px solid #f4ce14;
      background: #f4ce14;
    }
    .my-selected:hover:not([disabled]) {
      border-color: #f4ce14;
      color: #f4ce14;
    }
    .my-today {
      font-weight: bold;
      font-size: 120%;
      color: #495f58;
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
      background-color: rgba(244, 206, 20, 0.5);
    }
  `;

  const seasonEmoji = {
    winter: '⛄️',
    spring: '🌸',
    summer: '🌻',
    autumn: '🍂'
  };

  const getSeason = (month) => {
    const monthNumber = month.getMonth();
    if (monthNumber >= 0 && monthNumber < 3) return 'winter';
    if (monthNumber >= 3 && monthNumber < 6) return 'spring';
    if (monthNumber >= 6 && monthNumber < 9) return 'summer';
    else return 'autumn';
  };

const formatCaption = (month, options) => {
    const season = getSeason(month);
    return (
        <>
            <span role="img" aria-label={season}>
            {seasonEmoji[season]}
            </span>{' '}
            {format(month, 'LLLL', { locale: options?.locale })}
        </>
        );
    };

  return (
    <>
        <style>{css}</style>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={
                <p>
                  {footerText}
                </p>
              }
              fromDate={new Date()}
              required
              showOutsideDays
              weekStartsOn={1}
              disabled={date => date.getDay() === 1}
              modifiers={{ booked: bookedDays }}
              onDayClick={handleDayClick}
              modifiersClassNames={{
                selected: 'my-selected',
                today: 'my-today'
              }}
              modifiersStyles={{
                booked: bookedStyle,
                disabled: { fontSize: '75%' }
              }}
              styles={{
                caption: { color: '#495f58' }
              }}
              formatters={{ formatCaption }}
            />
    </>
  )
}

export default DatePicker