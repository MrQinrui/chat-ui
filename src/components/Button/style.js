import styled, {css} from 'styled-components';

const shapeVariants = {
  circle: css`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,

  rect: css`
    padding: 12px 18px;
    border-radius: 6px;
  `
}

const TypeVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.gray3};
    color: ${({ theme }) => theme.grayDark}; 
  `,

  danger: css` 
    background-color: ${({ theme }) => theme.red};
    color: white;
  `
}

const StyledButton = styled.button`
  border: none;
  ${({ shape }) => shapeVariants[shape]};
  ${({ type }) => TypeVariants[type]};
  
  transform: scale(1);
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

export default StyledButton
