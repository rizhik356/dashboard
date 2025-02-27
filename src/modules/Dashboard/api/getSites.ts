import { axiosInstance } from '../../../shared/api'

const getSites = async () => {
  const { data } = await axiosInstance.get('http://localhost:3100/sites')
  return data
}

export default getSites
