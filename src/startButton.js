import React from 'react';

export function Button({ setStartButton }) {
  return (
    <button
      type='button'
      className='btn btn-primary'
      onClick={() => {
        setStartButton((status) => !status);
      }}
    >
      Задать вопрос
    </button>
  );
}
