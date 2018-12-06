export { default } from './ChipStatus'
export * from './ChipStatus'

export enum EChipStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ERROR = "ERROR",
  DELETED = "DELETED",
  INCOMPLETE = "INCOMPLETE"
}

export type TChipStatus = EChipStatus | null

export interface IChipStatusProps {
  /** Status de la chip */
  status: TChipStatus,
  /** texte associé */
  placeholder: string
}
