import React, { useContext, useState } from 'react';
import { AppContext } from './context';
import { useFetch } from './useFetch';
import Element from './components/Element';

const SECCESS = 'success';
const ERROR = 'error';

function submit(e, status) {
  e.preventDefault();
}

export const Form = () => {
  const { setQuery, elements, message } = useContext(AppContext);

  return (
    <form className='container main-form' noValidate>
      {elements
        ? elements.map((field, i) => <Element key={i} field={field} />)
        : null}

      <div className='form-group row mb-3'>
        <div className='col d-flex justify-content-center'>
          <div className='is-invalid'>{message}</div>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col text-center'>
          <button
            type='submit'
            className='btn btn-outline-primary'
            onClick={(e) => {
              submit(e);
              setQuery(SECCESS);
            }}
          >
            Submit
          </button>
        </div>
        <div className='col text-center'>
          <button
            type='submit'
            className='btn btn-outline-danger'
            onClick={(e) => {
              submit(e);
              setQuery(ERROR);
            }}
          >
            Mistake
          </button>
        </div>
      </div>
    </form>
  );
};
