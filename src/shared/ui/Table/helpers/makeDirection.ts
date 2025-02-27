import { SortInfo } from '../types/TableData'

const makeDirection = (direction: SortInfo['direction']) => {
  if (direction === 'asc') {
    return 'desc'
  } else if (direction === '') {
    return 'asc'
  }
  return ''
}

export default makeDirection
