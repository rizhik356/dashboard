import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSites, getTests } from '../../../shared/api'
import Secondary from '../../../wrappers/Secondary'

const Main = () => {
  const location = useLocation()
  const [name, setName] = useState('')

  useEffect(() => {
    const id = location.pathname.split('/').pop() as string
    Promise.all([getSites(id), getTests(id)])
      .then(([sites, test]) => {
        console.log(sites, test)
        setName(test.name)
      })
      .catch((err) => console.log(err))
  }, [])

  return <Secondary title={'Finalize'} text={name} />
}

export default Main
