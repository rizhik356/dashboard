import styles from './scss/styles.module.scss'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>
}

export default Main
