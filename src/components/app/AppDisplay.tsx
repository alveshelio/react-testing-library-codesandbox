import * as React from "react"
import * as s from "./AppDisplay.scss"

import { IAppActions } from "./appActions"

// Redux connection
interface IStateToProps {
  firstName: string
  lastName: string
  fullName: string
}

type TDispatchToProps = IAppActions

// Local Component State
interface IAppState {
  firstName: string
  lastName: string
}
type TAppProps = IStateToProps & TDispatchToProps

class AppDisplay extends React.PureComponent<TAppProps, IAppState> {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
  }

  onFirstNameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    this.setState(() => ({ firstName: value }))
  }

  onFirstNameKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.changeFirstName(e.currentTarget.value)
    }
  }

  onLastNameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    this.setState(() => ({ lastName: value }))
  }

  onLastNameKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.changeLastName(e.currentTarget.value)
    }
  }

  onClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    this.props.updateFullName()
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>App running</h1>
        <div>
          <label htmlFor="firstname">
            <h1>test</h1>
          </label>
          <input
            id="firstname"
            type="text"
            onChange={this.onFirstNameChangeHandler}
            value={this.state.firstName}
            onKeyPress={this.onFirstNameKeyPressHandler}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            onChange={this.onLastNameChangeHandler}
            value={this.state.lastName}
            onKeyPress={this.onLastNameKeyPressHandler}
          />
          <p data-testid="firstName" className={s.FirstName}>
            firstName: <span>{this.props.firstName}</span>
            lastName: <span>{this.props.lastName}</span>
          </p>
          <button onClick={this.onClickHandler}>Update fullName</button>
          {this.props.fullName && <p>fullName: {this.props.fullName}</p>}
        </div>
      </div>
    )
  }
}

export default AppDisplay
