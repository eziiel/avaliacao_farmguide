import React from 'react';
import { twMerge } from 'tailwind-merge';

// text: titulo
// action: função
export default function ClearFilter({ text, action, ...props }) {
  
  const handleEvent = (e) => {
    e.preventDefault();
    action();
  };
  
  return (
    <button
      {...props}
      type='button'
      onClick={handleEvent}
      className={twMerge(props.className, '')}
    >
      {text}
    </button>
  );
}
