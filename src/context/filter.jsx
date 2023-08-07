import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [search, setSearch] = useState(null);

  return (
    <FilterContext.Provider value={{ search, setSearch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const ctx = useContext(FilterContext);

  if (ctx === null) throw Error("error");
  return ctx;
};
