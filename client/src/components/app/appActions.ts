import { AppTypes } from "./appActionTypes"
import { Action } from "redux"

// Expose Interface of the reducer action, used in appReducer
export interface IChangeFirstNameAction extends Action {
  type: AppTypes.CHANGE_FIRST_NAME
  firstName: string
}

export interface IChangeLastNameAction extends Action {
  type: AppTypes.CHANGE_LAST_NAME
  lastName: string
}

export interface IUpdateFullNameAction extends Action {
  type: AppTypes.UPDATE_FULL_NAME
}

// Expose all available actions, used in container for mapDispatchToProps
export type TAppAvailableActions =
  | IChangeFirstNameAction
  | IChangeLastNameAction
  | IUpdateFullNameAction

// The actual action function
const changeFirstName = (firstName: string): IChangeFirstNameAction => ({
  type: AppTypes.CHANGE_FIRST_NAME,
  firstName,
})

const changeLastName = (lastName: string): IChangeLastNameAction => ({
  type: AppTypes.CHANGE_LAST_NAME,
  lastName,
})

const updateFullName = (): IUpdateFullNameAction => ({
  type: AppTypes.UPDATE_FULL_NAME,
})

// Expose all available function of this action file, used in container to define DispatchToProps interface of the container
export interface IAppActions {
  changeFirstName: (firstName: string) => IChangeFirstNameAction
  changeLastName: (lastName: string) => IChangeLastNameAction
  updateFullName: () => IUpdateFullNameAction
}

// Combine all available actions of this file under a central object, used in container mapDispatchToProps for actual function call
export const AppActions: IAppActions = {
  changeFirstName,
  changeLastName,
  updateFullName,
}
