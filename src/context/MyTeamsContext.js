import { useReducer, createContext } from "react";

const initialState = [];

export const MyTeamsContext = createContext(initialState);

function myTeamsReducer(state = [], action) {
  switch (action.type) {
    case "create":
      return [...state, action.payload];
    case "update":
      const teamIndex = state.findIndex(
        (team) => team.name === action.payload.name
      );
      state[teamIndex] = { ...state[teamIndex], ...action.payload };
      return [...state];
    case "delete":
      return [...state.filter((team) => team.name !== action.payload.name)];
    default:
      return state;
  }
}

export default function MyTeamsProvider({ children }) {
  const [state, dispatch] = useReducer(myTeamsReducer, initialState);

  return (
    <MyTeamsContext.Provider value={{ state, dispatch }}>
      {children}
    </MyTeamsContext.Provider>
  );
}
