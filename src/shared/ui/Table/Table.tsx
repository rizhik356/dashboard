import styles from './scss/styles.module.scss'
import { Props, SortInfo } from './types/TableData'
import Body from './Body'
import Head from './Head'
import { useEffect, useState } from 'react'
import { Data } from '../../../modules/Dashboard/types/DasboardData'
import defaultSortInfo from './sources/defaultsSortinfo'
import makeDirection from './helpers/makeDirection'

const Table = ({ data }: Props) => {
  const [sortedData, setSortedData] = useState<Array<Data>>([])
  const [sortInfo, setSortInfo] = useState<SortInfo>(defaultSortInfo)

  useEffect(() => {
    setSortedData(data)
    setSortInfo(defaultSortInfo)
  }, [data])

  const handleSort = (dataIndex: keyof Data) => {
    const direction =
      sortInfo.dataIndex === dataIndex
        ? makeDirection(sortInfo.direction)
        : 'asc'

    setSortInfo({ dataIndex, direction })

    const newSortedData = [...data]

    if (direction === 'asc') {
      newSortedData.sort((a, b) => (a[dataIndex] > b[dataIndex] ? 1 : -1))
    } else if (direction === 'desc') {
      newSortedData.sort((a, b) => (a[dataIndex] < b[dataIndex] ? 1 : -1))
    }

    setSortedData(newSortedData)
  }

  return (
    <div className={styles['table_container']}>
      <table>
        <Head handleSort={handleSort} sortInfo={sortInfo} />
        <Body data={sortedData} />
      </table>
    </div>
  )
}

export default Table
