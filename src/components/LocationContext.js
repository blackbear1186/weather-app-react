import { createContext, useContext, useState } from "react";

const location = {
  city: "Waco",
  country: "US",
};
export const LocationContext = createContext(location);

export const LocationProvider = ({ children }) => {
  return (
    <LocationContext.Provider value={{ location }}>{children}</LocationContext.Provider>
  );
};

// export const useLocation = () => useContext(LocationContext);
