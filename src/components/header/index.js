import React from 'react';
import moment from 'moment';
import './index.css';
import ArrowLeft from '../assests/arrow-left.svg';
import ArrowRight from '../assests/arrow-right.svg';

const index = ({ value, setValue }) => {
  function getWeek() {
    return moment(value).isoWeek();
  }

  function prevWeek() {
    return value.clone().subtract(1, 'week');
  }

  function nextWeek() {
    return value.clone().add(1, 'week');
  }
  return (
    <div className='header'>
      <div className='arrow' onClick={() => setValue(prevWeek())}>
        <img src={ArrowLeft} alt='' />
      </div>
      <div>
        <h2>{getWeek()} Week for the Year</h2>
      </div>
      <div className='arrow' onClick={() => setValue(nextWeek())}>
        <img src={ArrowRight} alt='' />
      </div>
    </div>
  );
};

export default index;
