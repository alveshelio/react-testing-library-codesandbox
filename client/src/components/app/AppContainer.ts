import { connect } from "react-redux"
import { Dispatch } from "redux"

import AppDisplay from "./AppDisplay"
import { AppActions } from "components/app/appActions"
import { IStoreState, TStoreActions } from "types/common"

const mapStateToProps = (state: IStoreState) => ({
  firstName: state.appReducer.firstName,
  lastName: state.appReducer.lastName,
  fullName: state.appReducer.fullName,
})

const mapDispatchToProps = (dispatch: Dispatch<TStoreActions>) => ({
  changeFirstName(firstName: string) {
    dispatch(AppActions.changeFirstName(firstName))
  },
  changeLastName(lastName: string) {
    dispatch(AppActions.changeLastName(lastName))
  },
  updateFullName() {
    dispatch(AppActions.updateFullName())
  },
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDisplay)

export default AppContainer
