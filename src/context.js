import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('form');
  const { formJSON, message } = useFetch(query);
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(formJSON);
  }, [formJSON]);

  const handleChange = (id, event) => {
    const newElements = [...elements];
    newElements.forEach((field) => {
      const { type, name } = field;
      if (id === name) {
        switch (type) {
          case 'checkbox':
            field['value'] = event.target.checked;
            break;
          default:
            field['value'] = event.target.value;
            break;
        }
      }
      setElements(newElements);
    });
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
