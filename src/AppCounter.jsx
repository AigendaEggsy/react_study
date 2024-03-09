import './App.css';
import Counter from './components/Counter';
import React, { useState } from 'react';

export default function AppCounter() {
  const [totalcount, setTotalcount] = useState(0);
  return (
    <div className='container'>
      <div className='banner'>
        Total Count : {totalcount} {totalcount > 10 ? '🔥' : '❄️'}
      </div>
      <Counter setTotalcount={setTotalcount}/>
      <Counter setTotalcount={setTotalcount}/>
    </div>
  );
}

