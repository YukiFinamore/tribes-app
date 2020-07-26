import React from 'react'
import { Container } from './styles'
import menuIcon from '../../assets/images/icons/menu.png'
import editIcon from '../../assets/images/icons/edit.png'

const Header = ({title, right}) => (
  <Container>
    <img src={menuIcon} alt={"Menu"}></img> 
    <p> {title} </p>
    <img src={right} alt={"Edit"}></img>
  </Container>
)

Header.defaultProps = {
  right: editIcon,
};

export default Header
