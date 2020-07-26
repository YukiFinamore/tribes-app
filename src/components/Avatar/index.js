import React from 'react'
import { Container } from './styles'

const Avatar = ({img}) => (
  <Container>
    <img src={img} alt="Profile"></img> 
  </Container>
)

export default Avatar
