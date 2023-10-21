import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonStyleType = 'PRIMARY' | 'SECONDARY'

interface TypeProps {
  type: ButtonStyleType
}

export const Container = styled.TouchableOpacity<TypeProps>`
  min-height: 50px;
  max-height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;

  ${({ theme, type }) =>
    type === 'PRIMARY'
      ? css`
          border: 1px solid ${theme.COLORS.GRAY_2};
          background-color: ${theme.COLORS.GRAY_2};
        `
      : css`
          border: 1px solid ${theme.COLORS.GRAY_1};
          background-color: transparent;
        `}
`

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`

export const Icon = styled(MaterialIcons).attrs<TypeProps>(
  ({ theme, type }) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
  }),
)``
