import { Status } from '../enums/TableData'

const statusColors: Record<Status, string> = {
  [Status.DRAFT]: 'rgba(92, 92, 92, 1)',
  [Status.ONLINE]: 'rgba(27, 218, 157, 1)',
  [Status.PAUSED]: 'rgba(255, 131, 70, 1)',
  [Status.STOPPED]: 'rgba(254, 72, 72, 1)',
}

export default statusColors
