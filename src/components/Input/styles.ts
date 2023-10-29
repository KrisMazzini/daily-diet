import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_2};
  `}
`

interface InputProps {
  multiline?: boolean
  hasError?: boolean
}

export const TextInput = styled.TextInput<InputProps>`
  ${({ theme, multiline, hasError }) => css`
    min-height: ${multiline ? 120 : 48}px;

    padding: 14px;
    border-radius: 6px;
    border: 1px solid ${hasError ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_5};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Error = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.RED_DARK};
  `}
`
