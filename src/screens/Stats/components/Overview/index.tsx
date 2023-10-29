import { Container, Label, Percentage } from './styles'

import { Header } from '@components/Header'

import { useMeals } from '@hooks/useMeals'

export function Overview() {
  const { registeredMeals, percentageOfMealsWithinDiet } = useMeals()

  const positiveStats = percentageOfMealsWithinDiet >= 60

  return (
    <Container>
      <Header type={positiveStats ? 'POSITIVE' : 'NEGATIVE'} spacing="NONE" />

      {registeredMeals ? (
        <>
          <Percentage>{percentageOfMealsWithinDiet.toFixed(2)}%</Percentage>
          <Label>das refeições dentro da dieta</Label>
        </>
      ) : (
        <Label>nenhuma refeição cadastrada</Label>
      )}
    </Container>
  )
}
