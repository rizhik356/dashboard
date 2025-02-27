import axiosInstance from './axiosInstance'

const getTests = async (id: string) => {
  const { data } = await axiosInstance.get(`http://localhost:3100/tests/${id}`)
  return data
}

export default getTests
