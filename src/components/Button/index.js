import React from 'react'
import GeneralStyles from '../../styles/general'

import { Container } from './styles'

const Button = ({
  onClick = _ => _,
  ...props
}) => (
  <>
    <GeneralStyles />
    <Container
      {...props}
      onClick={e => {
        e.stopPropagation()
        onClick()
      }}
    />
  </>
)

export default Button
