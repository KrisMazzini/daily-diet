import { CardGroup, Container, Data } from './styles'

import { Box } from '@components/Box'
import { Overview } from './components/Overview'
import { Card } from './components/Card'

import { useMeals } from '@hooks/useMeals'

export function Stats() {
  const {
    registeredMeals,
    mealsWithinDiet,
    mealsOutOfDiet,
    percentageOfMealsWithinDiet,
    bestStreak,
  } = useMeals()

  const positiveStats = percentageOfMealsWithinDiet >= 60

  return (
    <Container
      colorIndicator={positiveStats ? 'POSITIVE' : 'NEGATIVE'}
      edges={['top', 'left', 'right']}
    >
      <Overview />

      <Box title="Estatísticas gerais">
        <Data>
          <Card
            value={bestStreak}
            label="melhor sequência de pratos dentro da dieta"
          />
          <Card value={registeredMeals} label="refeições registradas" />

          <CardGroup>
            <Card
              direction="ROW"
              color="POSITIVE"
              value={mealsWithinDiet}
              label="refeições dentro da dieta"
            />
            <Card
              direction="ROW"
              color="NEGATIVE"
              value={mealsOutOfDiet}
              label="refeições fora da dieta"
            />
          </CardGroup>
        </Data>
      </Box>
    </Container>
  )
}
