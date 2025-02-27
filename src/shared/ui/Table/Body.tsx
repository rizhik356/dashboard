import Record from './Record'
import { BodyProps } from './types/TableData'

const Body = ({ data }: BodyProps) => {
  return (
    <tbody>
      {data.map((item) => {
        return <Record {...item} key={item.id} />
      })}
    </tbody>
  )
}

export default Body
