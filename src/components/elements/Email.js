import React, { useContext } from 'react';
import { AppContext } from '../../context';

const Email = ({
  field_placeholder,
  field_requierd,
  field_id,
  field_label,
  field_name,
  field_type,
  field_value,
  field_errors,
}) => {
  const { handleChange } = useContext(AppContext);
  return (
    <div className='form-group mb-3'>
      <label htmlFor={field_id} className='form-label'>
        {field_label}
      </label>
      <input
        type='text'
        className={`form-control ${field_errors ? 'is-invalid' : false}`}
        id={field_id}
        aria-describedby='textHelp'
        placeholder={field_placeholder}
        required={field_requierd}
        value={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
      {field_errors ? (
        <div className='invalid-feedback'>{field_errors}</div>
      ) : null}
    </div>
  );
};

export default Email;
