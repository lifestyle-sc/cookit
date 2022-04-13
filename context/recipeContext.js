import { createContext, useReducer } from "react";
import RecipeReducer from "./recipeReducer";

const RecipeContext = createContext()

export default RecipeContext

export const RecipeProvider = ({ children }) => {
  const initialState = {
    user: null,
  }

  const [state, dispatch ] = useReducer(RecipeReducer, initialState)

  return <RecipeContext.Provider value={{
    ...state,
    dispatch,
  }} >
    {children}
  </RecipeContext.Provider>
}