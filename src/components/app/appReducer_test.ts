import appReducer, { initialState } from "./appReducer"
import { AppActions } from "./appActions"

test("It should set first name", () => {
  const expectedFirstName = "Helio"
  expect(appReducer(initialState, AppActions.changeFirstName(expectedFirstName)).firstName).toBe(
    expectedFirstName
  )
})

test("It should set last name", () => {
  const expectedLastName = "Alves"
  expect(appReducer(initialState, AppActions.changeLastName(expectedLastName)).lastName).toBe(
    expectedLastName
  )
})
