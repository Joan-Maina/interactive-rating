import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [selectednumber, setSelectednumber] = useState(null);
  const [finalreview, setFinalreview] = useState(null);
  const fetchUser = (e) => {
    e.preventDefault();
    console.log(selectednumber);
    setFinalreview(selectednumber);
  };

  return (
    <DataContext.Provider
      value={{
        selectednumber,
        setSelectednumber,
        finalreview,
        fetchUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
