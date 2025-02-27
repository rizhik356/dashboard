import styles from './scss/styles.module.scss'
import findIcon from '../../../asssets/Vector.png'
import { Props } from './types/InputData'

const Input = ({ count, handleChange, value }: Props) => {
  return (
    <div className={styles['input_container']}>
      <img src={findIcon} alt={'find_icon'} />
      <span>{count} tests</span>
      <input
        placeholder={'What test are you looking for?'}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

export default Input
