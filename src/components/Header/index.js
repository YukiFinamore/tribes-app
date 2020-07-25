import React from 'react'
import { Container } from './styles'
import menuIcon from '../../assets/images/icons/menu.png'
import editIcon from '../../assets/images/icons/edit.png'


const Header = ({}) => (
  <Container>
    <img src={menuIcon}></img> 
    <p> André Silva </p>
    <img src={editIcon}></img>
  </Container>
)

export default Header
