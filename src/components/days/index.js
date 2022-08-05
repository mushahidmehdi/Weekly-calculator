import React from 'react';
import Header from '../header';
import './index.css';

const index = ({ value, setValue }) => {
  const Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <>
      <Header value={value} setValue={setValue} />
      <div className='container'>
        {Days.map((day, idx) => (
          <div key={idx} className='dayCell'>
            {day}
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
