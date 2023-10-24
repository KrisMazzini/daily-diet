import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

type ColorIndicatorStyleType = 'POSITIVE' | 'NEGATIVE'

interface ContainerProps {
  colorIndicator: ColorIndicatorStyleType
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, colorIndicator }) =>
    colorIndicator === 'POSITIVE'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
`

export const Data = styled.View`
  margin-top: 24px;
  gap: 8px;
`

export const CardGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`
