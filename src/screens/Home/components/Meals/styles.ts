import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-top: 32px;
`

interface TitleProps {
  isFirstSection?: boolean
}

export const Title = styled.Text<TitleProps>`
  ${({ theme, isFirstSection }) => css`
    margin-top: ${isFirstSection ? 0 : 32}px;

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
    color: ${theme.COLORS.GRAY_1};
  `}
`
