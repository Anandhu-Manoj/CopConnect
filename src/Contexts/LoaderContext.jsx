import React, { createContext, useState } from "react";

export const addLoaderContext = createContext();

const LoaderContext = ({ children }) => {
  const [loader, setLoader] = useState(false);

  return (
    <addLoaderContext.Provider value={{loader, setLoader}}>
      {children}
    </addLoaderContext.Provider>
  );
};

export default LoaderContext;
