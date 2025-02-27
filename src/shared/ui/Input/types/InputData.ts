import React from 'react'

export type Props = {
  count: number
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}
