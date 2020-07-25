import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variables.bgOrange};
  color: ${variables.fontWhite};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  font-size: 14px;
  font-family: 'Montserrat-Bold';
  text-transform: uppercase;
  letter-spacing: 3px;
  border-radius: 8px;
  padding: 15px 0;
`
