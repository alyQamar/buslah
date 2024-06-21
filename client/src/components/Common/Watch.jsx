import React, { useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Watch = ({ time, onChange }) => {
  const [value, setValue] = useState(time || new Date());

  const handleClockChange = (newTime) => {
    setValue(newTime);
    onChange(newTime);
  };

  const handleHourChange = (event) => {
    const newHour = parseInt(event.target.value, 10);
    const newTime = new Date(value);
    newTime.setHours(newHour);
    setValue(newTime);
    onChange(newTime);
  };

  const handleMinuteChange = (event) => {
    const newMinute = parseInt(event.target.value, 10);
    const newTime = new Date(value);
    newTime.setMinutes(newMinute);
    setValue(newTime);
    onChange(newTime);
  };

  return (
    <div className="watch-container p-3 bg-white rounded-lg shadow-lg">
      <Clock
        value={value}
        renderNumbers
        className="rounded-full shadow-lg mb-4"
      />
      <div className="flex gap-2">
        <select
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
          value={value.getHours()}
          onChange={handleHourChange}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>
              {i.toString().padStart(2, '0')}
            </option>
          ))}
        </select>
        <select
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
          value={value.getMinutes()}
          onChange={handleMinuteChange}
        >
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i}>
              {i.toString().padStart(2, '0')}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Watch;
