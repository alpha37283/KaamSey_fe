import React, { createContext, useState } from 'react';

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [hours, setHours] = useState('');
  const [workers, setWorkers] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState(null);

  return (
    <ServiceContext.Provider value={{ title, setTitle, desc, setDesc, category, setCategory, tags, setTags, hours, setHours, workers, setWorkers, price, setPrice, img, setImg,}}>
      {children}
    </ServiceContext.Provider>
  );
};
