import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext({
  category: '',
  setCategory: (category:string) => {},
});

const CategoryContextProvider = ({ children }:any) => {
  const [category, setCategory] = useState('');

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;

export const useCategory = () => useContext(CategoryContext);