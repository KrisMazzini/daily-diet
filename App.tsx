/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'

import { ThemeProvider } from 'styled-components/native'
import theme from '@theme/index'

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'

import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar animated />
      {fontsLoaded ? <></> : <Loading />}
    </ThemeProvider>
  )
}
