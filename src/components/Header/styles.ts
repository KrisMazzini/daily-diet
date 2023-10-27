import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export type SpacingStyleType = 'NONE' | 'DEFAULT'

interface ContainerProps {
  spacing: SpacingStyleType
}

export const Container = styled.View<ContainerProps>`
  height: 24px;
  position: relative;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ spacing }) =>
    spacing === 'DEFAULT'
      ? css`
          margin: 16px 24px 24px;
        `
      : css`
          width: 100%;
        `}
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;

  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;
`

export type ColorIndicatorStyleType = 'POSITIVE' | 'NEGATIVE' | 'DEFAULT'

interface ColorProps {
  type: ColorIndicatorStyleType
}

export const BackIcon = styled(ArrowLeft).attrs<ColorProps>(
  ({ theme, type }) => {
    switch (type) {
      case 'POSITIVE':
        return {
          size: 24,
          color: theme.COLORS.GREEN_DARK,
        }
      case 'NEGATIVE':
        return {
          size: 24,
          color: theme.COLORS.RED_DARK,
        }
      case 'DEFAULT':
        return {
          size: 24,
          color: theme.COLORS.GRAY_2,
        }
    }
  },
)``

export const Title = styled.Text<ColorProps>`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `}

  ${({ theme, type }) => {
    switch (type) {
      case 'POSITIVE':
        return css`
          color: ${theme.COLORS.GREEN_DARK};
        `
      case 'NEGATIVE':
        return css`
          color: ${theme.COLORS.RED_DARK};
        `
      case 'DEFAULT':
        return css`
          color: ${theme.COLORS.GRAY_2};
        `
    }
  }}
`
