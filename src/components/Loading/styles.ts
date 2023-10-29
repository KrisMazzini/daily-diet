import styled from 'styled-components/native'

export type LoadingStyleType = 'PRIMARY' | 'SECONDARY'

interface Props {
  type: LoadingStyleType
}

export const Container = styled.View<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_7 : 'transparent'};
`

export const Indicator = styled.ActivityIndicator.attrs<Props>(
  ({ theme, type }) => ({
    color: type === 'PRIMARY' ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_7,
  }),
)``
