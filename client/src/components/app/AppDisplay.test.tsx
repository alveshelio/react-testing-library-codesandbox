import * as React from "react"
import { render, waitForElement, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"

import AppDisplay from "./AppDisplay"
import { AppActions } from "./appActions"

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test("mounts AppDisplay", async () => {
  const { container, getByText, getByTestId, debug } = render(
    <AppDisplay
      firstName="Jean"
      lastName=""
      fullName=""
      changeFirstName={AppActions.changeFirstName}
      changeLastName={AppActions.changeLastName}
      updateFullName={AppActions.updateFullName}
    />
  )
  const firstName = container.querySelector(`[data-testid="firstName"]`)
  console.log("firstName", firstName.classList)

  debug()

  const h1Element = getByText("App running")

  const firstNameInput = await waitForElement(
    () => container.querySelector("#firstname") as HTMLInputElement
  )
  const lastNameInput = await waitForElement(
    () => container.querySelector("#lastname") as HTMLInputElement
  )

  // expect(h1Element).toHaveTextContent("App running")
  // expect(firstNameInput.value).toEqual("Jean")
  // expect(lastNameInput.value).toEqual("")
})
