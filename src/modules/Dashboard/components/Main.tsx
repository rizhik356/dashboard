import styles from '../scss/styles.module.scss'
import Input from '../../../shared/ui/Input'
import React, { useEffect, useState } from 'react'
import getSites from '../api/getSites'
import getTests from '../api/getTests'
import formatData from '../helpers/formatData'
import { Data } from '../types/DasboardData'
import { Table } from '../../../shared/ui/Table'
import Reset from './Reset'

const Main = () => {
  const [data, setData] = useState<Array<Data>>([])
  const [filteredData, setFilteredData] = useState<Array<Data>>([])
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    Promise.all([getSites(), getTests()])
      .then(([sites, tests]) => {
        const newData = formatData(sites, tests)
        setData(newData)
        setFilteredData(newData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    const newFilteredData = data.filter((item) =>
      item.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase()),
    )
    setFilteredData(newFilteredData)
  }

  const handleReset = () => {
    setFilteredData(data)
    setInputValue('')
  }

  return (
    <>
      <div className="header_container">
        <h1>Dashboard</h1>
      </div>
      <div className={styles['main_container']}>
        <Input
          count={data.length ? filteredData.length : data.length}
          handleChange={handleInputChange}
          value={inputValue}
        />
        {data.length && !filteredData.length ? (
          <Reset onClick={handleReset} />
        ) : (
          <Table data={filteredData} />
        )}
      </div>
    </>
  )
}

export default Main
