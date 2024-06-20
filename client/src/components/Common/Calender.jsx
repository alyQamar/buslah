import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calender = ({ onSelect }) => {
  return (
    <div className="calendar-container p-3 bg-white rounded-lg shadow-lg">
      <DatePicker
        inline
        selected={new Date()}
        onChange={(date) => onSelect(date)}
      />
    </div>
  );
};

export default Calender;
