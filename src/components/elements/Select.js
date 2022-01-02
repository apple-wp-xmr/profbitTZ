import React, { useContext } from 'react';
import { AppContext } from '../../context';
const Select = ({
  field_placeholder,
  field_requierd,
  field_id,
  field_label,
  field_name,
  field_type,
  field_value,
  field_errors,
  field_options,
}) => {
  const { handleChange } = useContext(AppContext);
  let defaultValue = [];
  if (field_value) {
    field_options.forEach((element, index) => {
      if (Object.keys(element)[0] === field_value) {
        defaultValue.unshift(element);
      } else {
        defaultValue.push(element);
      }
    });
    field_options = defaultValue;
  }

  return (
    <div className='form-group mb-3'>
      <label className='mb-2' htmlFor={field_id}>
        {field_label}
      </label>
      <select
        className='form-control '
        id={field_id}
        required={field_requierd}
        onChange={(event) => handleChange(field_id, event)}
      >
        {field_value ? null : <option value=''>{field_placeholder}</option>}
        {field_options.map((element, i) => {
          return (
            <option key={i} value={Object.keys(element)}>
              {Object.values(element)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
