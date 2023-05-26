import React from 'react'
import styled from 'styled-components'
import theme from './theme'

const StyledButton = styled.div`
  width: ${props => props.width || '80px'};
  background-color: ${theme.primaryColor};
`

export default function Button({onClick,label,children, width}) {
  return (
    <StyledButton onClick={()=>onClick('blue')} width={width}>
      <button>{label}</button>
      {children}
    </StyledButton>
  )
}
