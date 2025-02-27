import { ColumnProps } from './types/TableData'
import { Data } from '../../../modules/Dashboard/types/DasboardData'
import sortIcon from '../../../asssets/Chevron.png'
import styles from './scss/styles.module.scss'

const Column = ({ name, handleSort, dataIndex, sortInfo }: ColumnProps) => {
  return (
    <th scope="col" onClick={() => handleSort(dataIndex as keyof Data)}>
      <div className={styles['column_container']}>
        <span>{name}</span>
        {sortInfo.dataIndex !== dataIndex ||
        (sortInfo.dataIndex === dataIndex && !sortInfo.direction) ? null : (
          <img
            src={sortIcon}
            alt={'sort icon'}
            className={styles[sortInfo.direction]}
          />
        )}
      </div>
    </th>
  )
}

export default Column
