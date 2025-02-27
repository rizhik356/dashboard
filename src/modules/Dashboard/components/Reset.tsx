import styles from '../scss/styles.module.scss'
import { ResetProps } from '../types/DasboardData'
const Reset = ({ onClick }: ResetProps) => {
  return (
    <div className={styles['reset_container']}>
      <span>Your search did not match any results.</span>
      <button onClick={onClick}>Reset</button>
    </div>
  )
}

export default Reset
