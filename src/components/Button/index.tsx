import React from 'react'

import { ButtonBase } from './styles'

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = props => {
  return (
    <>
      <ButtonBase {...props} />
    </>
  )
}

export default Button
