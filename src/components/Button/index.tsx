import React from 'react'

import { ButtonBase } from './styles'

const Button: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = props => {
  return (
    <>
      <ButtonBase {...props} />
    </>
  )
}

export default Button
