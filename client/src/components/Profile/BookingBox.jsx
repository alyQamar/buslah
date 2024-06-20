import React, { useState } from 'react';
import Calender from '@components/Common/Calender';
import Watch from '@components/Common/Watch';
import cal from '../../assets/icons/profile/calender.svg';
import row from '../../assets/icons/profile/row.svg';

const BookingBox = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimeFrom, setShowTimeFrom] = useState(false);
  const [showTimeTo, setShowTimeTo] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleTimeFromSelect = (time) => {
    setTimeFrom(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setShowTimeFrom(false);
  };

  const handleTimeToSelect = (time) => {
    setTimeTo(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setShowTimeTo(false);
  };

  return (
    <div className="w-full max-w-[538px] p-8 bg-white rounded-2xl mb-10 flex flex-col gap-6">
      <div className="text-cyan-800 text-[31px] font-semibold font-['Montserrat']">
        Available Session
      </div>

      {/* Select Day Input */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-sm font-medium">Select Day</label>
        <div className="relative">
          <input
            type="text"
            value={selectedDate ? selectedDate.toLocaleDateString() : ''}
            placeholder="Select a day"
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            onClick={() => setShowCalendar(!showCalendar)}
          />
          <img
            src={cal}
            alt="Calendar Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          />
          {showCalendar && (
            <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
              <Calender onSelect={handleDateSelect} />
            </div>
          )}
        </div>
      </div>

      {/* Time From and Time To Inputs */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-1/2">
          <label className="text-gray-700 text-sm font-medium">Time From</label>
          <div className="relative">
            <input
              type="text"
              value={timeFrom}
              placeholder="Select time from"
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
              onClick={() => setShowTimeFrom(!showTimeFrom)}
            />
            <img
              src={row}
              alt="Time From Icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowTimeFrom(!showTimeFrom)}
            />
            {showTimeFrom && (
              <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                <Watch time={new Date()} onChange={handleTimeFromSelect} />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-1/2">
          <label className="text-gray-700 text-sm font-medium">Time To</label>
          <div className="relative">
            <input
              type="text"
              value={timeTo}
              placeholder="Select time to"
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
              onClick={() => setShowTimeTo(!showTimeTo)}
            />
            <img
              src={row}
              alt="Time To Icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowTimeTo(!showTimeTo)}
            />
            {showTimeTo && (
              <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                <Watch time={new Date()} onChange={handleTimeToSelect} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[456px] h-[0px] opacity-20 border border-black"></div>
      <div className='w-full flex flex-row justify-between'>
      <div className="text-black text-[17px] font-medium font-['Inter']">Total price</div>
      <div className="text-cyan-800 text-base font-semibold font-['Inter']">40.00 LE</div>
      </div>
      <div className="w-[386px] h-[38px] pl-[75px] pr-[73px] pt-[9px] pb-[11px] bg-cyan-800 rounded-[20px] justify-center items-center inline-flex">
            <div className="text-white text-[15px] font-semibold font-['Inter']">Book session for 14 June at 8 am</div>
      </div>
    </div>
  );
};

export default BookingBox;
