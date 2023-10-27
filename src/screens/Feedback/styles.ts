import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

type TitleStyleType = 'POSITIVE' | 'NEGATIVE'

interface TitleProps {
  type: TitleStyleType
}

export const Title = styled.Text<TitleProps>`
  margin-bottom: 8px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    color: ${type === 'POSITIVE'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `};
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_1};
    text-align: center;
  `}
`

export const Bold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Image = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`
