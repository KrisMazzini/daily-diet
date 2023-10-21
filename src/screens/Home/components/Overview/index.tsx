import { useNavigation } from '@react-navigation/native'
import { Container, Icon, Label, NavigationButton, Percentage } from './styles'

export function Overview() {
  const navigation = useNavigation()

  function handleNavigateToStats() {
    navigation.navigate('stats')
  }

  return (
    <Container onPress={handleNavigateToStats}>
      <Percentage>90,86%</Percentage>
      <Label>das refeições dentro da dieta</Label>

      <NavigationButton onPress={handleNavigateToStats}>
        <Icon />
      </NavigationButton>
    </Container>
  )
}
