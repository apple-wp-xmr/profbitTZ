import { useState, useEffect } from 'react';
const endpoint = `backend/`;

export const useFetch = (urlParams) => {
  const [data, setData] = useState({});

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData({
        formJSON: data.form,
        message: data.message ? data.message : '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const table = {
      form: 'customer-message-form.json',
      success: 'customer-message-form-success.json',
      error: 'customer-message-form-error.json',
    };
    fetchData(`${endpoint}${table[urlParams]}`);
  }, [urlParams]);

  return data;
};
