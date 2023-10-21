import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
