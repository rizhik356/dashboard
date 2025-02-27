import { axiosInstance } from '../../../shared/api'

const getTests = async () => {
  const { data } = await axiosInstance.get('http://localhost:3100/tests')
  return data
}

export default getTests
