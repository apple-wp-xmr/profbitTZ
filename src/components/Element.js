import React from 'react';
import InputText from './elements/InputText';
import Select from './elements/Select';
import Email from './elements/Email';
import Textarea from './elements/Textarea';

const Element = ({ field }) => {
  const {
    attrs: { placeholder, required },
    label,
    name,
    type,
    errors,
    value: errorValue,
    options,
  } = field;

  switch (type) {
    case 'text':
      return (
        <InputText
          field_placeholder={placeholder}
          field_requierd={required}
          field_id={name}
          field_label={label}
          field_name={name}
          field_type={type}
          field_value={errorValue}
          field_errors={errors}
        />
      );
    case 'email':
      return (
        <Email
          field_placeholder={placeholder}
          field_requierd={required}
          field_id={name}
          field_label={label}
          field_name={name}
          field_type={type}
          field_value={errorValue}
          field_errors={errors}
        />
      );
    case 'select':
      return (
        <Select
          field_placeholder={placeholder}
          field_requierd={required}
          field_id={name}
          field_label={label}
          field_name={name}
          field_type={type}
          field_value={errorValue}
          field_errors={errors}
          field_options={options}
        />
      );
    case 'textarea':
      return (
        <Textarea
          field_placeholder={placeholder}
          field_requierd={required}
          field_id={name}
          field_label={label}
          field_name={name}
          field_type={type}
          field_value={errorValue}
          field_errors={errors}
          field_options={options}
        />
      );

    default:
      return null;
  }
};

export default Element;
