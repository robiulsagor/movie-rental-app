/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";
import { cartReducer, initialState } from "../reducers/CartReducer";

export const ThemeContext = createContext();
export const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        {children}
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
};
