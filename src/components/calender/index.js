import React, { useState, useEffect } from 'react';
import moment from 'moment';
import buildWeek from '../builder';
import './calender.css';
import dayStyle from '../helper/index';
import Days from '../days';

const Calender = () => {
  const [calender, setCalender] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalender(buildWeek(value));
  }, [value]);

  return (
    <>
      <div className='wrapper'>
        <Days value={value} setValue={setValue} />
        <div>
          {calender.map((week) => (
            <div className='container'>
              {week.map((day) => (
                <div onClick={() => setValue(day)} className='cell'>
                  <div className={dayStyle(day, value)}>{day.format('D')}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calender;
