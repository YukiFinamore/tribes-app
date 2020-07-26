import React from 'react'
import { Container } from './styles'
import menuIcon from '../../assets/images/icons/menu.png'
import editIcon from '../../assets/images/icons/edit.png'

const Header = ({title}) => (
  <Container>
    <img src={menuIcon} alt={"Menu"}></img> 
    <p> {title} </p>
    <img src={editIcon} alt={"Edit"}></img>
  </Container>
)

export default Header
