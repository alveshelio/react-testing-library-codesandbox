import { IAppState } from "../src/components/app/appReducer"
import { TAppAvailableActions } from "../src/components/app/appActions"

// Expose all of the reducers structure through the whole project
export interface IStoreState {
  appReducer: IAppState
}

export type TStoreActions = TAppAvailableActions
