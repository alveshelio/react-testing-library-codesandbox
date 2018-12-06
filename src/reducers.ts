import { combineReducers } from "redux"
import { IStoreState } from "../types/common"
import * as AppState from "../src/components/app/appReducer"

// Define the global initialState of the whole store, used in root index
export const initialStoreState: IStoreState = {
  appReducer: AppState.initialState,
}

export default combineReducers({
  appReducer: AppState.default,
})
