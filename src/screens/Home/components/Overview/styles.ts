import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

interface ColorProps {
  type?: 'green' | 'red'
}

export const Container = styled.TouchableOpacity<ColorProps>`
  position: relative;

  align-items: center;
  gap: 2px;

  margin: 32px 0 40px;
  padding: 20px 16px;
  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type === 'red' ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
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

export const NavigationButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;

  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;
`

export const Icon = styled(ArrowUpRight).attrs<ColorProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'red' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
  }),
)``
