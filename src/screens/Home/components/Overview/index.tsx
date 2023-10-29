import { useNavigation } from '@react-navigation/native'
import { Container, Icon, Label, NavigationButton, Percentage } from './styles'

import { useMeals } from '@hooks/useMeals'

export function Overview() {
  const navigation = useNavigation()
  const { registeredMeals, percentageOfMealsWithinDiet } = useMeals()

  const positiveStats = percentageOfMealsWithinDiet >= 60

  function handleNavigateToStats() {
    navigation.navigate('stats')
  }

  return (
    <Container
      type={positiveStats ? 'green' : 'red'}
      onPress={handleNavigateToStats}
    >
      {registeredMeals ? (
        <>
          <Percentage>{percentageOfMealsWithinDiet.toFixed(2)}%</Percentage>
          <Label>das refeições dentro da dieta</Label>
        </>
      ) : (
        <Label>nenhuma refeição cadastrada</Label>
      )}

      <NavigationButton onPress={handleNavigateToStats}>
        <Icon type={positiveStats ? 'green' : 'red'} />
      </NavigationButton>
    </Container>
  )
}
