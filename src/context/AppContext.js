import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            break state;
    }
}

const initialState = {
  budget: 1000,
  expenses: [
    { id: 1, name: "compras", cost: 20 },
    { id: 2, name: "transporte", cost: 30 },
    { id: 3, name: "escola", cost: 40 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (<AppContext.Provider value={
    {
      budget: state.budget,
      expenses: state.expenses,
      dispatch
    }
  }>
    {props.children} 
  </AppContext.Provider>)
};

