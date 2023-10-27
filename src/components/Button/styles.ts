import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonStyleType = 'PRIMARY' | 'SECONDARY'
export type ButtonSizeType = 'FILL' | 'HUG'

interface TypeProps {
  type: ButtonStyleType
}

interface ButtonProps extends TypeProps {
  size: ButtonSizeType
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  min-height: 50px;
  max-height: 50px;
  padding: 16px 24px;

  ${({ size }) => size === 'FILL' && 'width: 100%;'};

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
