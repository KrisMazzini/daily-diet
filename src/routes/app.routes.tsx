import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Stats } from '@screens/Stats'
import { NewMeal } from '@screens/NewMeal'
import { Feedback } from '@screens/Feedback'
import { Info } from '@screens/Info'

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="new" component={NewMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="info" component={Info} />
    </Navigator>
  )
}
