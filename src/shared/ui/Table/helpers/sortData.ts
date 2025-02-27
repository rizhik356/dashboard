import { Data } from '../../../../modules/Dashboard/types/DasboardData'
import { SortInfo } from '../types/TableData'

const sortData = (
  data: Array<Data>,
  direction: SortInfo['direction'],
  dataIndex: keyof Data,
) => {
  const newSortedData = [...data]

  const statusOrder = ['ONLINE', 'PAUSED', 'STOPPED', 'DRAFT']

  if (dataIndex === 'status') {
    if (direction === 'asc') {
      return newSortedData.sort(
        (a, b) =>
          statusOrder.indexOf(a[dataIndex]) - statusOrder.indexOf(b[dataIndex]),
      )
    } else if (direction === 'desc') {
      return newSortedData.sort(
        (a, b) =>
          statusOrder.indexOf(b[dataIndex]) - statusOrder.indexOf(a[dataIndex]),
      )
    }
  } else {
    if (direction === 'asc') {
      return newSortedData.sort((a, b) =>
        a[dataIndex] > b[dataIndex] ? 1 : -1,
      )
    } else if (direction === 'desc') {
      return newSortedData.sort((a, b) =>
        a[dataIndex] < b[dataIndex] ? 1 : -1,
      )
    }
  }

  return newSortedData
}

export default sortData
