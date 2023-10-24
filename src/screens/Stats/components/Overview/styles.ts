import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  gap: 2px;

  padding: 16px 24px 32px;
`

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_2};
  `}
`
