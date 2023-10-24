import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  border-radius: 20px;
  padding: 32px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_1};
  `}
`
