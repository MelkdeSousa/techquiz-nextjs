import React from 'react'

import { InputBase } from './styles'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return (
    <>
      <InputBase {...props} />
    </>
  )
}

export default Input
