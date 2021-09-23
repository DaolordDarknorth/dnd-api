import React, { useEffect, useContext, useReducer, useState } from "react";
import {reducer} from "./reducer";

const API_ENDPOINT = `https://www.dnd5eapi.co/api/spells/`;
const initialState = {
  results: [],
  index: "",
  name: "",
  url: [],
  desc: "",
  range: "",
  duration: "",
  loading: true,
};
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("heal");
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchHits = async (url) => {
    dispatch({ type: "SET_LOADING" });
  
  try {
    const response = async () => {
      await fetch(url);
    };
    const data = async () => {
      await response.json();
    };
    dispatch({ type: "SET_HITS", payload: data });
  } catch (error) {
    console.error(error);
  }
};
  useEffect(() => {
    fetchHits(`${API_ENDPOINT}&${state.query}`);
  }, [state.query]);
  return (
    <AppContext.Provider value={{ ...state, query, setQuery }}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};


