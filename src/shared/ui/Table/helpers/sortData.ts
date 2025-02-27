import { Data } from '../../../../modules/Dashboard/types/DasboardData'
import { SortInfo } from '../types/TableData'
import statusOrder from '../sources/statusOrder'

const sortData = (
  data: Array<Data>,
  direction: SortInfo['direction'],
  dataIndex: keyof Data,
) => {
  const newSortedData = [...data]

  if (dataIndex === 'status') {
    return newSortedData.sort((a, b) => {
      const indexA = statusOrder.indexOf(a[dataIndex])
      const indexB = statusOrder.indexOf(b[dataIndex])

      if (direction === 'asc') {
        return indexA - indexB
      } else if (direction === 'desc') {
        return indexB - indexA
      }
      return 0
    })
  } else {
    return newSortedData.sort((a, b) => {
      if (direction === 'asc') {
        return a[dataIndex] > b[dataIndex] ? 1 : -1
      } else if (direction === 'desc') {
        return a[dataIndex] < b[dataIndex] ? 1 : -1
      }
      return 0
    })
  }
}

export default sortData
