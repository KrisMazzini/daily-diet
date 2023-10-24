import styled, { css } from 'styled-components/native'

export type ColorStyleType = 'POSITIVE' | 'NEGATIVE' | 'DEFAULT'
export type DirectionStyleType = 'ROW' | 'COLUMN'

interface ContainerProps {
  color: ColorStyleType
  direction: DirectionStyleType
}

export const Container = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 16px;
  border-radius: 8px;

  background-color: ${({ theme, color }) => {
    switch (color) {
      case 'POSITIVE':
        return theme.COLORS.GREEN_LIGHT
      case 'NEGATIVE':
        return theme.COLORS.RED_LIGHT
      case 'DEFAULT':
        return theme.COLORS.GRAY_6
    }
  }};

  ${({ direction }) =>
    direction === 'ROW' &&
    css`
      flex-basis: 0;
      flex-grow: 1;
    `}
`

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_2};
    text-align: center;
  `}
`
