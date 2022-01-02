import React, { useContext } from 'react';
import { AppContext } from '../../context';

const Textarea = ({
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
      <textarea
        className='form-control'
        id={field_id}
        rows={3}
        placeholder={field_placeholder}
        required={field_requierd}
        value={field_value}
      ></textarea>
    </div>
  );
};

export default Textarea;
