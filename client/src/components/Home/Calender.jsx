import { useState } from 'react';
import Calendar from 'react-calendar';

const Calender = () => {

  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }


  return (
    <div className='flex justify-center items-center rounded-xl'
     style={{ width: '238px', height: '240px', backgroundColor: '#295576',color: "#CBD5E1" }}>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
    </div>
  )
}

export default Calender

