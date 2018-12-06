import * as React from "react"

import * as s from "./ChipStatus.scss"
import { IChipStatusProps } from "."

const ChipStatus: React.FunctionComponent<IChipStatusProps> = props => {
  return <div className={s.active}>{props.placeholder}</div>
}

export default ChipStatus
