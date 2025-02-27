import React from 'react'
import styles from './scss/styles.module.scss'
import footerImg from '../asssets/footer-chevron.png'
import { useNavigate } from 'react-router-dom'
import routesUrls from '../contsants/routes/routesUrls'

type Props = {
  title: string
  text: string
}

const Secondary = ({ title, text }: Props) => {
  const navigate = useNavigate()

  return (
    <div className={styles['secondary_container']}>
      <div className="header_container">
        <h1>{title}</h1>
        <h2>{text}</h2>
      </div>
      <div
        onClick={() => navigate(routesUrls.dashboard)}
        className={styles.footer}
      >
        <img src={footerImg} alt={'footerImg'} />
        <span>Back</span>
      </div>
    </div>
  )
}

export default Secondary
