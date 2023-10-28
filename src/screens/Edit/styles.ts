import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Form = styled.View`
  flex: 1;
  gap: 24px;
`

export const Row = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const Col = styled.View`
  flex: 1;
`
