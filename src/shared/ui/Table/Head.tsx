import Column from './Column'
import columnsData from './sources/columnsData'
import { HeadProps } from './types/TableData'

const Head = ({ handleSort, sortInfo }: HeadProps) => {
  return (
    <thead>
      <tr>
        {columnsData.map((item) => {
          return (
            <Column
              {...item}
              key={item.name}
              handleSort={handleSort}
              sortInfo={sortInfo}
            />
          )
        })}
        <th scope="col"></th>
      </tr>
    </thead>
  )
}

export default Head
