import React, { useState, useEffect, useMemo } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState('light');
  function slowFunction(num) {
    console.log('This is large function');
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }
  const doubleNumber = useMemo(() => {
    return slowFunction(counter)
  },[counter]);
  useEffect(() => {
    console.log('counter or theme updated');
  }, [counter, theme]);
  return (
    <div>
      <span
        className="btn btn-sm btn-outline-secondary mx-2"
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        Decrement
      </span>
      <span className="mx-3">{counter}</span>
      <span
        className="btn btn-sm btn-outline-secondary mx-2"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increment
      </span>
      <div className="m-2">
        Output from double number function is : {doubleNumber}
      </div>
      <div>
        Current Theme: {theme}{' '}
        <span
          className="mx-5 btn btn-outline-dark btn-sm m-3"
          onClick={() => {
            setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
          }}
        >
          Change Theme
        </span>
      </div>
    </div>
  );
}
