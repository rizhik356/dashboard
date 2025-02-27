import axiosInstance from './axiosInstance'

const getSites = async (id: string) => {
  const { data } = await axiosInstance.get(`http://localhost:3100/sites/${id}`)
  return data
}

export default getSites
