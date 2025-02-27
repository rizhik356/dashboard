import { Data } from '../../../modules/Dashboard/types/DasboardData'
import styles from './scss/styles.module.scss'
import { useNavigate } from 'react-router-dom'
import routesUrls from '../../../contsants/routes/routesUrls'

const Record = ({
  name,
  type,
  statusColor,
  status,
  url,
  siteClassName,
  id,
}: Data) => {
  const navigate = useNavigate()

  const getButtonInfo = () => {
    const btnInfo = { btnText: '', btnClassName: '', btnOnClick: () => {} }
    if (status === 'DRAFT') {
      btnInfo.btnText = 'Finalize'
      btnInfo.btnClassName = 'finalize'
      btnInfo.btnOnClick = () => navigate(`${routesUrls.finalize}/${id}`)
    } else {
      btnInfo.btnText = 'Result'
      btnInfo.btnClassName = 'result'
      btnInfo.btnOnClick = () => navigate(`${routesUrls.results}/${id}`)
    }

    return btnInfo
  }

  const { btnText, btnClassName, btnOnClick } = getButtonInfo()

  return (
    <tr key={name}>
      <th scope="row" className={styles[siteClassName]}>
        {name}
      </th>
      <td>{type}</td>
      <td style={{ color: statusColor, fontWeight: 500 }}>{status}</td>
      <td>{url}</td>
      <td>
        <button className={styles[btnClassName]} onClick={btnOnClick}>
          {btnText}
        </button>
      </td>
    </tr>
  )
}

export default Record
