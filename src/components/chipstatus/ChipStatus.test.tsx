import * as React from "react"
import { render } from "react-testing-library"
import "jest-dom/extend-expect"

import ChipStatus from "./ChipStatus"
import { EChipStatus } from "./index"

test("ChipStatus inactive", async () => {
  const { container, debug } = render(
    <ChipStatus status={EChipStatus.INACTIVE} placeholder={"texte inactive"} />
  )
  debug()
  expect(container.firstChild).toHaveTextContent("texte inactive")
})
