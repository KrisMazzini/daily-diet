import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type ColorStyleType = 'POSITIVE' | 'NEGATIVE'

interface ContainerProps {
  type: ColorStyleType
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-bottom: 8px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_2};
  `}

  margin-bottom: 24px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-bottom: 8px;
`

export const Datetime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_2};
  `}

  margin-bottom: 24px;
`

export const Badge = styled.View`
  align-self: flex-start;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 8px 16px;
  border-radius: 1000px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`

interface BadgeIndicatorProps {
  type: ColorStyleType
}

export const BadgeIndicator = styled.View<BadgeIndicatorProps>`
  margin-top: 1px;

  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const BadgeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Actions = styled.View`
  margin-top: auto;
  gap: 8px;
`

export const DeleteConfirmationMessage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
    color: ${theme.COLORS.GRAY_2};
    text-align: center;
  `}
`
