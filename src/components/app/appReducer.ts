import { AppTypes } from "components/app/appActionTypes"
import {
  TAppAvailableActions,
  IChangeFirstNameAction,
  IChangeLastNameAction,
} from "components/app/appActions"

// Expose the structure of the data of this reducer, used in types/common.ts
export interface IAppState {
  firstName: string
  lastName: string
  fullName: string
}

// Define the initialState of this reducer, also referred to in store/initialStoreState
export const initialState: IAppState = {
  firstName: "",
  lastName: "",
  fullName: "",
}

// Local action for encapsulating specific action type
const changeFirstName = (state: IAppState = initialState, action: IChangeFirstNameAction) => {
  return { ...state, firstName: action.firstName }
}

const changeLastName = (state: IAppState = initialState, action: IChangeLastNameAction) => {
  return { ...state, lastName: action.lastName }
}

const updateFullName = (state: IAppState) =>
  state.firstName.trim() && state.lastName.trim()
    ? { ...state, fullName: `${state.firstName} ${state.lastName}` }
    : { ...state }

// Actual reducer entry point
export default (state: IAppState = initialState, action: TAppAvailableActions) => {
  switch (action.type) {
    case AppTypes.CHANGE_FIRST_NAME:
      return changeFirstName(state, action)
    case AppTypes.CHANGE_LAST_NAME:
      return changeLastName(state, action)
    case AppTypes.UPDATE_FULL_NAME:
      return updateFullName(state)
    default:
      return state
  }
}
