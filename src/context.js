import React, { useState, useContext, useEffect } from 'react';
import { useFetch } from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('form');
  const { formJSON, message } = useFetch(query);
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(formJSON);
  }, [formJSON]);

  console.log(elements);
  const handleChange = (id, event) => {
    // const newElements = { ...elements };
    // console.log(newElements);
    // newElements.forEach((field) => {
    //   console.log(field);
    //   const { type, name } = field;
    //   if (id === name) {
    //     switch (type) {
    //       case 'checkbox':
    //         field['field_value'] = event.target.checked;
    //         break;
    //       default:
    //         field['field_value'] = event.target.value;
    //         break;
    //     }
    //   }
    //   setElements(newElements);
    // });
  };

  return (
    <AppContext.Provider
      value={{
        setQuery,
        elements,
        message,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
