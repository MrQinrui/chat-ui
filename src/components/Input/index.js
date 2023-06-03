import React from 'react'
import PropTypes from 'prop-types'
import StyledInput from './style'
import { InputContainer, Prefix, Suffix } from './style'
import Icon from 'components/Icon'
import { useTheme } from 'styled-components'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

function Input({ placeholder = '请输入内容...', prefix, suffix, ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder}></StyledInput>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )
}

function Search({ placeholder = '请输入搜索内容...', ...rest }) {
  const theme = useTheme()
  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon
          icon={SearchIcon}
          width={18}
          height={18}
          color={theme.gray3}
        ></Icon>
      }
      {...rest}
    ></Input>
  )
}

Input.Search = Search

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
}

export default Input
