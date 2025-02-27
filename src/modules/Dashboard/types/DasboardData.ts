import { Type, Status } from '../enums/TableData'

export interface Site {
  id: number
  url: string
}

export interface Test {
  id: number
  name: string
  type: Type
  status: Status
  siteId: number
}

export type Data = Test & {
  url: string
  statusColor: string
  siteClassName: string
}

export type ResetProps = {
  onClick: () => void
}

export type SiteColors = {
  [key: number]: string
}
