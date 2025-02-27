import { Data } from '../../../../modules/Dashboard/types/DasboardData'

export type ColumnData = {
  name: string
  dataIndex: string
}

export type Props = {
  data: Array<Data>
}

export type BodyProps = {
  data: Array<Data>
}

export type ColumnProps = ColumnData & {
  handleSort: HeadProps['handleSort']
  sortInfo: SortInfo
}

export type SortInfo = {
  dataIndex: keyof Data | ''
  direction: 'asc' | 'desc' | ''
}

export type HeadProps = {
  handleSort: (dataIndex: keyof Data) => void
  sortInfo: SortInfo
}
