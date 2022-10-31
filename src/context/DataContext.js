import { createContext, useReducer } from "react";
import dataReducer from "./DataReducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    skills: [],
    projects: [],
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      children
    </DataContext.Provider>
  );
};

export default DataContext;
