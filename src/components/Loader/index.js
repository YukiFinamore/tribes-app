import React from 'react'
import { Container } from './styles'
import loaderIcon from '../../assets/images/icons/loader.gif'

const Loader = ({}) => (
  <Container>
    <img src={loaderIcon}></img> 
  </Container>
)

export default Loader
